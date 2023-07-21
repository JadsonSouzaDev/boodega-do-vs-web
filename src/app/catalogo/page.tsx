import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BSearch from "@/components/BSearch";
import BList from "@/components/BList";

export default function Catalog() {
  const headers = [
    { label: "Nome", key: "name" },
    { label: "Estilo", key: "style" },
    { label: "Tonalidade", key: "tonality" },
    { label: "Duração", key: "duration" },
  ];

  const rows = [
    {
      name: "Novinha an an an",
      style: "Forró",
      tonality: "Em",
      duration: "2:31",
    },
    {
      name: "Gol bolinha, gola quadrado",
      style: "Forró",
      tonality: "Bm",
      duration: "2:11",
    },
  ];

  return (
    <BPage>
      <BSection id="search-bar" className="py-10 px-2">
        <BFlex className="w-full">
          <BSearch placeholder="procure por músicas, estilos ou artistas" />
        </BFlex>
      </BSection>
      <BSection id="list" className="px-3">
        <BFlex className="w-full">
          <BList headers={headers} rows={rows} />
        </BFlex>
      </BSection>
    </BPage>
  );
}
