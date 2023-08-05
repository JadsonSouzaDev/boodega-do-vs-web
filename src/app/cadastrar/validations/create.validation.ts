import * as Yup from "yup";

const NAME_REGEX = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
const PHONE_REGEX = /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const validateName = (name: string): boolean => {
  if (name) {
    const separateNames = name.split(" ");
    if (separateNames.length < 2) return false;
    return separateNames.every((subname: string) => NAME_REGEX.test(subname));
  }
  return false;
};

const validatePhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone);
};

export const validatePassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};

export const createUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("informe o nome completo")
    .test("nameValidation", "informe seu nome corretamente", validateName),
  email: Yup.string()
    .required("informe o e-mail")
    .email("informe um e-mail válido"),
  phone: Yup.string()
    .required("informe o seu celular")
    .test("phoneValidation", "informe seu celular corretamente", validatePhone),
  password: Yup.string()
    .required("informe a senha")
    .test(
      "passwordValidation",
      "a senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais",
      validatePassword
    ),
});
