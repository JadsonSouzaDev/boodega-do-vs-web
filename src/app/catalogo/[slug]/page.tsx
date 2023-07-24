"use client";

import { useParams } from "next/navigation";
import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import { songs } from "@/mocks/songs";
import BHeading from "@/components/BHeading";
import BYoutubeVideo from "@/components/BYoutubeVideo";
import BFlex from "@/components/BFlex";
import BText from "@/components/BText";
import { secondsToFormatedString } from "@/utils/time";
import BButtonPrice from "@/components/BButton/BButtonPrice";

export default function Song() {
  const params = useParams();
  const song = songs.find((s) => s.slug === params.slug);

  return (
    <BPage>
      <BSection id="details" className="py-5 md:py-10">
        <BFlex className="gap-3 w-full">
          <BHeading>{song?.name?.toLowerCase()}</BHeading>
          <BFlex orientation="row" className="items-baseline gap-2 md:gap-3">
            <BText>{song?.style}</BText>
            <BText>{song?.tonality}</BText>
            <BText>{secondsToFormatedString(song?.duration ?? 0)}</BText>
          </BFlex>
          <BYoutubeVideo videoCode={song?.youtubeCode ?? ""} />
          <BText className="py-3 md:py-10">
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
            <BButtonPrice label="Playback" price={19.99} />
            <BButtonPrice label="LR" price={24.99} />
            <BButtonPrice label="Multipista" price={29.99} />
          </BFlex>
        </BFlex>
      </BSection>
    </BPage>
  );
}
