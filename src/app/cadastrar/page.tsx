import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BAnchor from "@/components/BAnchor";
import BText from "@/components/BText";

export default function Signup() {
  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">cadastrar</BHeading>
              <BFlex className="gap-4 w-80">
                <BInput label="nome completo" type="text" />
                <BInput label="e-mail" type="email" />
                <BInput label="celular" type="tel" />
                <BInput label="senha" type="password" />
              </BFlex>
              <BFlex>
                <BButton className="px-8 py-2">criar conta</BButton>
              </BFlex>
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
