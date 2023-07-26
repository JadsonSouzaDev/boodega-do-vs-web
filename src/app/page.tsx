import BFlex from "@/components/BFlex";
import BPage from "../components/BPage";
import BSection from "../components/BSection";
import BSearch from "@/components/BSearch";
import { Song } from "../../types/song";
import BCatalogList from "@/components/BList/BCatalogList";


async function getSongs(): Promise<Song[]> {
  const res = await fetch(`${process.env.API_URL}/songs`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const songs: Song[] = await getSongs();

  return (
    <BPage>
      <BSection id="search-bar" className=" py-5 md:py-10">
        <BFlex className="w-full">
          <BSearch placeholder="procure pelo nome da música" />
        </BFlex>
      </BSection>
      <BSection id="list">
        <BFlex className="w-full">
          <BCatalogList songs={songs} />
        </BFlex>
      </BSection>
    </BPage>
  );
}
