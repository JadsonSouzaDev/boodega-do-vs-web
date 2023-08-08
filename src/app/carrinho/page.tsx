import { getSongsVersionsCached } from "@/clients/songs";
import BCart from "@/components/BCart";
import BFlex from "@/components/BFlex";
import BHeading from "@/components/BHeading";
import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import { SongVersion } from "@/types/song";

export default async function MyPlace() {
  const songVersions: SongVersion[] = await getSongsVersionsCached();

  return (
    <BPage>
      <BSection id="cart">
        <BFlex className="py-4 items-center w-full">
          <BHeading as="h2">Carrinho</BHeading>
          <BCart versions={songVersions} />
        </BFlex>
      </BSection>
    </BPage>
  );
}
