"use client";

import BFlex from "@/components/BFlex";
import { formatCurrency } from "@/utils/currency";
import { addToCart, removeFromCart } from "@/redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { Song, SongOrder, SongVersion } from "@/types/song";

type BButtonPriceType = {
  song: Song;
  version: SongVersion;
  versions: SongVersion[];
};

const BButtonPrice = ({ song, version, versions }: BButtonPriceType) => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: { cart: { items: SongOrder[] } }) => state.cart.items
  );

  const selected = items.find(
    (item) => item.song.id === song.id && item.version === version.key
  );

  const onClick = () => {
    const songOrder = { song, version: version.key };
    if (!selected) {
      dispatch(addToCart({ songOrder, versions }));
    } else {
      dispatch(removeFromCart({ songOrder, versions }));
    }
  };

  const commonClass = "text-sm font-medium rounded-lg px-4 py-4";
  const normalClass =
    "border bg-black dark:bg-transparent dark:border-white border-sky-transparent text-sky-500 text-white hover:bg-sky-600 hover:text-white";
  const selectedClass = "bg-sky-600 hover:bg-sky-700";

  return (
    <BFlex orientation="row" className="items-center">
      <button
        type="button"
        className={`${commonClass} ${selected ? selectedClass : normalClass}`}
        onClick={onClick}
      >
        {version.label} - R$
        {formatCurrency(version.price)}
      </button>
    </BFlex>
  );
};

export default BButtonPrice;
