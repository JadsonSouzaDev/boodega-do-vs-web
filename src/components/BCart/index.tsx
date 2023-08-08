"use client";

import { useDispatch, useSelector } from "react-redux";
import { SongOrder, SongVersion } from "@/types/song";
import BFlex from "../BFlex";
import BText from "../BText";
import BAnchor from "../BAnchor";
import { formatCurrency } from "@/utils/currency";
import BButton from "../BButton";
import { removeFromCart } from "@/redux/cart.slice";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createOrder } from "@/clients/order";
import { useRouter } from "next/navigation";

const BCart = ({ versions }: { versions: SongVersion[] }) => {
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  const dispatch = useDispatch();
  const { totalAmount, totalQuantity, items } = useSelector(
    (state: {
      cart: { items: SongOrder[]; totalAmount: number; totalQuantity: number };
    }) => state.cart
  );

  const onClick = async () => {
    try {
      setLoading(true);
      const result = await createOrder(items);
      toast.success("pedido criado com sucesso");
      router.push(`/order/${result.id}`);
    } catch (error: any | AxiosError) {
      toast.warn(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BFlex className="py-4 md:py-10 w-full items-center">
      {totalQuantity === 0 && (
        <BFlex>
          <BText>
            seu carrinho está vazio. acesse o{" "}
            <BAnchor href="/" className="dark:text-sky-400 text-sky-700">
              catálogo
            </BAnchor>{" "}
            e adicione músicas
          </BText>
        </BFlex>
      )}
      {totalQuantity > 0 && (
        <BFlex className="gap-5 md:gap-10 items-center">
          <BFlex className="sm:flex-row gap-3">
            {items.map((songOrder, key) => {
              const version = versions.find(
                (version) => version.key === songOrder.version
              ) as SongVersion;
              return (
                <BFlex
                  key={key}
                  className="w-64 border rounded-xl items-center p-4 bg-white dark:bg-transparent"
                >
                  <button
                    type="button"
                    className="absolute ml-56 -mt-3 hover:bg-red-400 dark:hover:bg-red-700 rounded-3xl p-1 justify-center items-center"
                    onClick={() =>
                      dispatch(removeFromCart({ songOrder, versions }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <BText fontSize="base">{songOrder.song.name}</BText>
                  <BText className="dark:text-gray-400 text-gray-700">
                    {version.label}
                  </BText>
                  <BText fontSize="base" fontWeight="bold" className="pt-3">
                    R$
                    {formatCurrency(version.price)}
                  </BText>
                </BFlex>
              );
            })}
          </BFlex>

          <BFlex>
            <BButton onClick={onClick} loading={loading}>
              <BText fontSize="base">
                finalizar compra{" | "}
                <BText fontWeight="bold">
                  R$
                  {formatCurrency(totalAmount)}
                  {" | "}
                </BText>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  className="mr-1 inline-flex w-5 h-5"
                  viewBox="0 0 194 194"
                  fill="white"
                >
                  <path d="M147.04 144.34c-7.02 0-13.6-2.7-18.57-7.67L101.7 109.9c-1.84-1.84-5.18-1.84-7.02 0L67.8 136.78c-4.97 4.97-11.55 7.67-18.57 7.67h-5.29l34.01 34.01c10.58 10.58 27.85 10.58 38.43 0l34.11-34.11-3.45-.01zM49.12 49.55c7.02 0 13.6 2.7 18.57 7.67L94.57 84.1a4.961 4.961 0 0 0 7.02 0l26.88-26.77c4.97-4.97 11.55-7.67 18.57-7.67h3.24l-34.11-34.11c-10.58-10.58-27.85-10.58-38.43 0l-34.02 34h5.4z" />
                  <path d="m178.45 77.84-20.62-20.62c-.43.22-.97.32-1.51.32h-9.39c-4.86 0-9.61 1.94-12.95 5.4L107.2 89.71c-2.48 2.48-5.83 3.78-9.07 3.78-3.35 0-6.59-1.3-9.07-3.78L62.18 62.83c-3.45-3.45-8.2-5.4-12.95-5.4H37.68c-.54 0-.97-.11-1.4-.32L15.55 77.84c-10.58 10.58-10.58 27.85 0 38.43l20.62 20.62c.43-.22.86-.32 1.4-.32h11.55c4.86 0 9.61-1.94 12.95-5.4l26.88-26.88c4.86-4.86 13.39-4.86 18.24 0l26.77 26.77c3.45 3.45 8.2 5.4 12.95 5.4h9.39c.54 0 .97.11 1.51.32l20.62-20.62c10.6-10.58 10.6-27.74.02-38.32" />
                </svg>
                pix
              </BText>
            </BButton>
          </BFlex>
        </BFlex>
      )}
    </BFlex>
  );
};

export default BCart;
