"use client";

import * as Yup from "yup";
import { FormikState, useFormik } from "formik";

import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BText from "@/components/BText";
import React, { useState } from "react";
import { requestRecovery } from "@/clients/recovery";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("informe o e-mail")
    .email("informe um e-mail válido"),
});

export default function Recovery() {
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async (
    { email }: { email: string },
    {
      resetForm,
    }: {
      resetForm: (nextState?: Partial<FormikState<{ email: string }>>) => void;
    }
  ) => {
    try {
      setLoading(true);
      await requestRecovery(email);
      toast.success(
        "solicitação enviada. verifique a caixa de entrada do seu e-mail"
      );
      resetForm();
    } catch (error: any | AxiosError) {
      toast.warn(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">recuperar</BHeading>
              <form onSubmit={handleSubmit} method="POST" id="request-recovery">
                <BFlex className="gap-5 w-80 pb-5">
                  <BInput
                    ref={React.createRef()}
                    id="email"
                    label="e-mail"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                  />
                  <BText className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    Digite o endereco de e-mail usado em sua conta. Enviaremos
                    um e-mail com o link para recuperação.
                  </BText>
                </BFlex>
                <BFlex className="pb-2">
                  <BButton
                    type="submit"
                    className="px-8 py-2"
                    loading={loading}
                  >
                    recuperar conta
                  </BButton>
                </BFlex>
              </form>
            </BFlex>
          </BFlex>
        </div>
      </BSection>
    </BPage>
  );
}
