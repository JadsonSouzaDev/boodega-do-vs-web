import { createSlice } from "@reduxjs/toolkit";
import { SongVersion } from "../types/song";

let savedCartItems = [];
if (typeof window !== "undefined") {
  savedCartItems = JSON.parse(localStorage.getItem("cart") ?? "[]") || [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCartItems as SongVersion[],
  reducers: {
    addToCart: (state, action: { payload: SongVersion; type: string }) => {
      const songVersion = action.payload;
      const itemExists = state.find(
        (item) => item.song.id === songVersion.song.id
      ) as unknown as SongVersion;

      if (!itemExists) {
        state.push(songVersion);
      } else {
        itemExists.version = songVersion.version;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (item: SongVersion) => item.song.id === action.payload
      );
      state.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
