import BCart from "@/components/BCart";
import BFlex from "@/components/BFlex";
import BHeading from "@/components/BHeading";
import BPage from "@/components/BPage";
import BSection from "@/components/BSection";

export default function MyPlace() {
  return (
    <BPage>
      <BSection id="cart">
        <BFlex className="py-4 items-center w-full">
          <BHeading as="h2">Carrinho</BHeading>
          <BCart />
        </BFlex>
      </BSection>
    </BPage>
  );
}
