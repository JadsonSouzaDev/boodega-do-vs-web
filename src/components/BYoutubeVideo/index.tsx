import BFlex from "../BFlex";

type BYoutubeVideoType = {
  videoCode: string;
};

const BYoutubeVideo = ({ videoCode }: BYoutubeVideoType) => {
  return (
    <BFlex className="mx-auto md:mx-0">
      <iframe
        width="370"
        height="210"
        src={`https://www.youtube.com/embed/${videoCode}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </BFlex>
  );
};

export default BYoutubeVideo;
