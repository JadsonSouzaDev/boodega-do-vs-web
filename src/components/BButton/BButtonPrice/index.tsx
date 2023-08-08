"use client";

import BFlex from "@/components/BFlex";
import { formatCurrency } from "@/utils/currency";
import { addToCart, removeFromCart } from "@/redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  Song,
  SongVersion,
  SongVersionEnum,
  SongVersionProperties,
} from "@/types/song";

type BButtonPriceType = {
  song: Song;
  version: SongVersionEnum;
};

const BButtonPrice = ({ song, version }: BButtonPriceType) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: { cart: SongVersion[] }) => state.cart);

  const selected = cart.find(
    (item) => item.song.id === song.id && item.version === version
  );

  const onClick = () => {
    const songVersion = { song, version };
    if (!selected) {
      dispatch(addToCart(songVersion));
    } else {
      dispatch(removeFromCart(songVersion));
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
        {SongVersionProperties[version].label} - R$
        {formatCurrency(SongVersionProperties[version].price)}
      </button>
    </BFlex>
  );
};

export default BButtonPrice;
