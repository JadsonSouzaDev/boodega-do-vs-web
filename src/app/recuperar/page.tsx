import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";
import BText from "@/components/BText";

export default function Recovery() {
  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">recuperar</BHeading>
              <BFlex className="gap-5 w-80">
                <BInput label="e-mail" type="email" />
                <BText className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  Digite o endereco de e-mail usado em sua conta. Enviaremos um
                  e-mail com o link para recuperação.
                </BText>
              </BFlex>
              <BFlex className="pb-2">
                <BButton className="px-8 py-2">criar conta</BButton>
              </BFlex>
            </BFlex>
          </BFlex>
        </div>
      </BSection>
    </BPage>
  );
}
