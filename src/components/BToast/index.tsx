"use client";

import { useEffect, useState } from "react";
import { Theme, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BToast = () => {
  const [mode, setMode] = useState<Theme>("dark");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      });
  }, []);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={mode}
    />
  );
};

export default BToast;
