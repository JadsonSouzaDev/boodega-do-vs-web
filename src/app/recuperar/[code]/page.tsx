"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import BFlex from "@/components/BFlex";
import BPage from "../../../components/BPage";
import BSection from "../../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import React, { useState } from "react";
import { updatePassword } from "@/clients/recovery";
import { AxiosError } from "axios";
import { validatePassword } from "@/app/cadastrar/validations/create.validation";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  password: Yup.string()
    .required("informe a senha")
    .test(
      "passwordValidation",
      "a senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais",
      validatePassword
    ),
});

export default function UpdatePassword({
  params,
}: {
  params: { code: string };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async ({ password }: { password: string }) => {
    try {
      setLoading(true);
      await updatePassword({ code: params.code, password });
      router.push("/login");
    } catch (error: any | AxiosError) {
      toast.warn(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
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
              <form onSubmit={handleSubmit} method="PATCH" id="update-password">
                <BFlex className="gap-5 w-80 pb-5">
                  <BInput
                    ref={React.createRef()}
                    id="password"
                    label="nova senha"
                    type="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={errors.password}
                  />
                </BFlex>
                <BFlex className="pb-2">
                  <BButton type="submit" className="px-8 py-2" loading={loading}>
                    atualizar senha
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
