import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BAnchor from "@/components/BAnchor";
import BText from "@/components/BText";

export default function Login() {
  return (
    <BPage>
      <BSection id="login-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">login</BHeading>
              <BFlex className="gap-4 w-80">
                <BInput label="e-mail" type="email" />
                <BInput label="senha" type="password" />
                <BAnchor href="/recuperar">
                  <BText>Esqueceu a senha?</BText>
                </BAnchor>
              </BFlex>
              <BFlex>
                <BButton className="px-10 py-2">Entrar</BButton>
              </BFlex>
              <BFlex
                orientation="row"
                className="items-center justify-center gap-1"
              >
                <BText>
                  Ainda não tem uma conta? 
                  <BAnchor href="/cadastrar">{" "}Crie uma agora</BAnchor>
                </BText>
              </BFlex>
            </BFlex>
          </BFlex>
        </div>
      </BSection>
    </BPage>
  );
}
