"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { FormikState, useFormik } from "formik";

import BButton from "@/components/BButton";
import BInput from "@/components/BInput";
import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import { AxiosError } from "axios";
import BToast from "@/components/BToast";
import { requestSong } from "@/clients/requestSong";
import { RequestSong } from "../../../types/requestSong";

const schema = Yup.object().shape({
  link: Yup.string().required("informe um link"),
  details: Yup.string().required("informe um detalhe"),
});

export default function Request() {
  const [success, setSuccess] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async (
    form: RequestSong,
    {
      resetForm,
    }: { resetForm: (nextState?: Partial<FormikState<RequestSong>>) => void }
  ) => {
    try {
      setLoading(true);
      await requestSong(form);
      setSuccess("solicitação de música enviada com sucesso");
      resetForm();
    } catch (error: any | AxiosError) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: new RequestSong(),
    validationSchema: schema,
    onSubmit,
  });

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = formik;

  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">solicitar</BHeading>
              <form onSubmit={handleSubmit} method="POST" id="request-song">
                <BFlex className="gap-4 w-80 pb-5">
                  <BInput
                    ref={React.createRef()}
                    id="link"
                    label="link da música no youtube"
                    type="text"
                    required
                    value={values.link}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.link}
                    error={errors.link}
                  />

                  <BInput
                    ref={React.createRef()}
                    id="details"
                    label="detalhes"
                    type="text"
                    required
                    value={values.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.details}
                    error={errors.details}
                  />
                </BFlex>
                <BFlex className="pb-3">
                  <BButton
                    type="submit"
                    className="px-8 py-2"
                    loading={loading}
                  >
                    solicitar música
                  </BButton>
                </BFlex>
              </form>
            </BFlex>
          </BFlex>
        </div>
        {error && (
          <BToast
            type="alert"
            text={error?.toLowerCase()}
            onClick={() => setError("")}
          />
        )}
        {success && (
          <BToast
            type="success"
            text={success?.toLowerCase()}
            onClick={() => setSuccess("")}
          />
        )}
      </BSection>
    </BPage>
  );
}
