import BFlex from "../BFlex";

type BYoutubeVideoType = {
  videoCode: string;
};

const BYoutubeVideo = ({ videoCode }: BYoutubeVideoType) => {
  return (
    <BFlex className="mx-auto my-auto md:mx-0 border rounded-xl p-4 bg-black">
      <iframe
        width="320"
        height="200"
        src={`https://www.youtube.com/embed/${videoCode}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </BFlex>
  );
};

export default BYoutubeVideo;
