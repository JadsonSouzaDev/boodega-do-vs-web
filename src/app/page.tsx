import BFlex from "@/components/BFlex";
import BPage from "../components/BPage";
import BSection from "../components/BSection";
import { Song } from "../../types/song";
import BSongsList from "@/components/BList/BSongsList";
import { getSongsCached } from "@/clients/songs";

export default async function Home() {
  const songs: Song[] = await getSongsCached();

  return (
    <BPage>
      <BSection id="list-songs">
        <BFlex className="w-full">
          <BSongsList songs={songs} />
        </BFlex>
      </BSection>
    </BPage>
  );
}
