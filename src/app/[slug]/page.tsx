import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import BHeading from "@/components/BHeading";
import BYoutubeVideo from "@/components/BYoutubeVideo";
import BFlex from "@/components/BFlex";
import BText from "@/components/BText";
import { secondsToFormatedString } from "@/utils/time";
import BButtonPrice from "@/components/BButton/BButtonPrice";
import { Song, SongVersion } from "../../types/song";
import { env } from "process";
import BAnchor from "@/components/BAnchor";
import { getSongsVersionsCached } from "@/clients/songs";

export type SongAndVersions = {
  song: Song;
  versions: SongVersion[];
};

async function getSong(slug: string): Promise<SongAndVersions> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/songs/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const versions: SongVersion[] = await getSongsVersionsCached();
  const song = await res.json();
  return { song, versions };
}

export default async function Song({ params }: { params: { slug: string } }) {
  const { song, versions } = await getSong(params.slug);

  return (
    <BPage>
      <BSection id="details" className="py-4">
        <BFlex className="gap-3 w-full items-center">
          <BFlex className="items-start w-full">
            <BAnchor className="gap-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-flex"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>

              <BText className="invisible md:visible">
                voltar para o catálogo
              </BText>
            </BAnchor>
          </BFlex>
          <BHeading>{song?.name?.toLowerCase()}</BHeading>
          <BFlex orientation="row" className="items-baseline gap-2 md:gap-3 ">
            <BText>{song?.style}</BText>
            <BText>{song?.tonality}</BText>
            <BText>{secondsToFormatedString(+song?.duration ?? 0)}</BText>
          </BFlex>
          <BFlex className="gap-3 pt-5">
            <BHeading as="h4" className="text-center">
              preview
            </BHeading>
            <BYoutubeVideo videoCode={song?.youtubeCode ?? ""} />
          </BFlex>
          <BText className="py-3 md:py-8">
            <p>tenha essa música em seu show com a mais alta qualidade.</p>
            <br />
            <p>download disponível em 3 opções:</p> <br />
            <p>
              <b>playback:</b> arquivo .mp3 pronto para execução; <br />
              <b>lr:</b> arquivo em .mp3 com canais esquerdo e direito
              divididos. <br />- esquerdo com metrônomo e voz de condução <br />
              - direito com instrumental base (sem bateria e baixo) <br />
              <b>multipista:</b> todos os canais de instrumentos enviados
              separadamente, além de canais de metrônomo e condução.
            </p>
            <br />
            <p>*obs: a compra de um tipo dá acesso à todos de menor valor</p>
          </BText>
          <BFlex orientation="row" className="items-start gap-3">
            {versions.map((version) => {
              return (
                <BButtonPrice key={version.key} song={song} versions={versions} version={version} />
              );
            })}
          </BFlex>
        </BFlex>
      </BSection>
    </BPage>
  );
}
