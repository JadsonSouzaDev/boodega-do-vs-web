import { createSlice } from "@reduxjs/toolkit";
import { SongOrder, SongVersion } from "../types/song";
import { SongAndVersions } from "@/app/[slug]/page";

export type SongOrderAndVersions = {
  songOrder: SongOrder;
  versions: SongVersion[];
};

const items =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList") ?? "[]")
    : [];
const totalAmount =
  localStorage.getItem("cartTotal") !== null
    ? JSON.parse(localStorage.getItem("cartTotal") ?? "0")
    : 0;
const totalQuantity =
  localStorage.getItem("cartQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartQuantity") ?? "0")
    : 0;

// adding this function to prevent repear code
const setCartListFunc = (
  items: SongOrder[],
  totalAmount: number,
  totalQuantity: number
) => {
  localStorage.setItem("cartList", JSON.stringify(items));
  localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
  localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
};

const calculateTotal = (
  items: SongOrder[],
  versions: SongVersion[]
): number => {
  return items.reduce((total, songVersion) => {
    const version = versions.find(
      (version) => version.key === songVersion.version
    ) as SongVersion;

    return total + Number(version.price);
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: items as SongOrder[],
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
  },
  reducers: {
    addToCart: (state, action: { payload: SongOrderAndVersions }) => {
      const { songOrder, versions } = action.payload;
      const itemExists = state.items.find(
        (item) => item.song.id === songOrder.song.id
      ) as unknown as SongOrder;

      if (!itemExists) {
        state.items.push(songOrder);
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        itemExists.version = songOrder.version;
      }
      state.totalAmount = calculateTotal(state.items, versions);
      setCartListFunc(state.items, state.totalAmount, state.totalQuantity);
    },

    removeFromCart: (state, action: { payload: SongOrderAndVersions }) => {
      const { songOrder, versions } = action.payload;
      const index = state.items.findIndex(
        (item: SongOrder) => item.song.id === songOrder.song.id
      );
      state.items.splice(index, 1);
      state.totalQuantity = state.totalQuantity - 1;
      state.totalAmount = calculateTotal(state.items, versions);
      setCartListFunc(state.items, state.totalAmount, state.totalQuantity);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
