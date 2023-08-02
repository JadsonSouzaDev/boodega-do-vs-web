import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import BHeading from "@/components/BHeading";
import BYoutubeVideo from "@/components/BYoutubeVideo";
import BFlex from "@/components/BFlex";
import BText from "@/components/BText";
import { secondsToFormatedString } from "@/utils/time";
import BButtonPrice from "@/components/BButton/BButtonPrice";
import { Song } from "../../../types/song";
import { env } from "process";

async function getSong(slug: string): Promise<Song> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/songs/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Song({ params }: { params: { slug: string } }) {
  const song = await getSong(params.slug);

  return (
    <BPage>
      <BSection id="details" className="py-5 md:py-10">
        <BFlex className="gap-3 w-full items-center">
          <BHeading>{song?.name?.toLowerCase()}</BHeading>
          <BFlex orientation="row" className="items-baseline gap-2 md:gap-3 ">
            <BText>{song?.style}</BText>
            <BText>{song?.tonality}</BText>
            <BText>{secondsToFormatedString(song?.duration ?? 0)}</BText>
          </BFlex>
          <BFlex className="gap-3 pt-5">
            <BHeading as="h4" className="text-center">preview</BHeading>
            <BYoutubeVideo videoCode={song?.youtubeCode ?? ""} />
          </BFlex>
          <BText className="py-3 md:py-8">
            <p>Tenha essa música em seu show com a mais alta qualidade.</p>
            <br />
            <p>Download disponível em 3 opções:</p> <br />
            <p>
              <b>PLAYBACK:</b> Arquivo .mp3 pronto para execução; <br />
              <b>LR:</b> Arquivo em .mp3 com canais esquerdo e direito
              divididos. <br />- Esquerdo com metrônomo e voz de condução <br />
              - Direito com instrumental base (sem bateria e baixo) <br />
              <b>MULTIPISTA:</b> Todos os canais de instrumentos enviados
              separadamente, além de canais de metrônomo e condução.
            </p>
            <br />
            <p>*Obs: a compra de um tipo dá acesso à todos de menor valor</p>
          </BText>
          <BFlex orientation="row" className="items-start gap-3">
            <BButtonPrice label="Playback" price={14.99} />
            <BButtonPrice label="LR" price={19.99} />
            <BButtonPrice label="Multipista" price={29.99} />
          </BFlex>
        </BFlex>
      </BSection>
    </BPage>
  );
}
