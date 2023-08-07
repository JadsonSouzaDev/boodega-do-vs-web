"use client";

import React, { useState } from "react";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BAnchor from "@/components/BAnchor";
import BText from "@/components/BText";
import { createUserSchema } from "./validations/create.validation";
import { CreateUser } from "./types/user";
import { formatPhone } from "./masks/phone.mask";
import { createUser } from "@/clients/user";
import { toast } from "react-toastify";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const { status } = useSession();
  if (status === "authenticated") router.push("/minha-area");

  const onSubmit = async (user: CreateUser) => {
    try {
      setLoading(true);
      const userSaved = await createUser({
        ...user,
        phone: user.phone.replace(/\D/g, ""),
      });

      // Login
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (res?.error) {
        const errorObject = JSON.parse(res.error);
        toast.warn(errorObject.message);
      } else {
        router.push("/minha-area");
      }
    } catch (error: any | AxiosError) {
      const status = error.response.data.statusCode;
      if (status === 409) {
        toast.warn("e-mail já cadastrado");
      } else {
        toast.warn(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: new CreateUser(),
    validationSchema: createUserSchema,
    onSubmit,
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ minHeight: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full py-5 md:pt-14">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">cadastrar</BHeading>
              <form onSubmit={handleSubmit} method="POST" id="login">
                <BFlex className="gap-4 w-80 pb-5">
                  <BInput
                    ref={React.createRef()}
                    id="name"
                    label="nome completo"
                    type="text"
                    required
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.name}
                    error={errors.name}
                  />
                  <BInput
                    ref={React.createRef()}
                    id="phone"
                    label="celular"
                    type="tel"
                    required
                    value={values.phone}
                    onChange={(e) => {
                      e.target.value = formatPhone(e.target.value);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    touched={touched.phone}
                    error={errors.phone}
                  />
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
                </BFlex>
                <BFlex>
                  <BButton
                    type="submit"
                    className="px-8 py-2"
                    loading={loading}
                  >
                    criar conta
                  </BButton>
                </BFlex>
              </form>
              <BFlex
                orientation="row"
                className="items-center justify-center gap-1"
              >
                <BText>
                  já tem uma conta?
                  <BAnchor className="font-bold" href="/login">
                    {" "}
                    faça login
                  </BAnchor>
                </BText>
              </BFlex>
            </BFlex>
          </BFlex>
        </div>
      </BSection>
    </BPage>
  );
}
