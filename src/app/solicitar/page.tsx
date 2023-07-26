import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BHeading from "@/components/BHeading";
import BInput from "@/components/BInput";
import BButton from "@/components/BButton";

export default function Request() {
  return (
    <BPage>
      <BSection id="signup-form">
        <div style={{ height: "80vh" }}>
          <BFlex className="items-center justify-center w-full h-full">
            <BFlex className="border rounded-xl items-center p-5 gap-10 bg-white dark:bg-transparent">
              <BHeading as="h2">solicitar</BHeading>
              <BFlex className="gap-4 w-80">
                <BInput label="link da música no youtube" type="text" />
                <BInput label="observações" type="text" />
              </BFlex>
              <BFlex className="pb-3">
                <BButton className="px-8 py-2">solicitar música</BButton>
              </BFlex>
            </BFlex>
          </BFlex>
        </div>
      </BSection>
    </BPage>
  );
}
