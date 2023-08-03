"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BAnchor from "@/components/BAnchor";
import BText from "@/components/BText";
import BToast from "@/components/BToast";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("informe o e-mail")
    .email("informe um e-mail inválido"),
  password: Yup.string().required("informe a senha"),
});

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const { status } = useSession();
  if (status === "authenticated") router.push("/minha-area");

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      const errorObject = JSON.parse(res.error);
      setError(errorObject.message);
    } else {
      router.push("/minha-area");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <BPage>
      <BSection id="login-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">login</BHeading>
              <form onSubmit={handleSubmit} method="POST" id="login">
                <BFlex className="gap-4 w-80 pb-5">
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
                  <BInput
                    ref={React.createRef()}
                    id="password"
                    label="senha"
                    type="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={errors.password}
                  />
                  <BAnchor href="/recuperar" className="mr-auto">
                    <BText fontWeight="bold">esqueceu a senha?</BText>
                  </BAnchor>
                </BFlex>
                <BFlex>
                  <BButton
                    type="submit"
                    className="px-8 py-2"
                    loading={loading}
                  >
                    entrar
                  </BButton>
                </BFlex>
              </form>
              <BFlex
                orientation="row"
                className="items-center justify-center gap-1"
              >
                <BText>
                  ainda não tem uma conta?
                  <BAnchor className="font-bold" href="/cadastrar">
                    {" "}
                    crie uma agora
                  </BAnchor>
                </BText>
              </BFlex>
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
      </BSection>
    </BPage>
  );
}
