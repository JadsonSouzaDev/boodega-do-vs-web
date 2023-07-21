"use client";

import Image from "next/image";
import get from "lodash/get";
import BFlex from "../BFlex";
import BGrid from "../BGrid";
import BText from "../BText";

type RowList = {
  label: string;
  key: string;
};

type BListProps<Type> = {
  headers: RowList[];
  rows: Type[];
  onClick: (index: number) => void;
};

function BList<Type>({ rows, headers, onClick }: BListProps<Type>) {
  const className =
    "p-2 md:p-3 border border-gray-300 rounded-lg dark:border-gray-600 hover:bg-sky-300 hover:dark:bg-sky-700 hover:cursor-pointer";

  return (
    <BFlex className="gap-2 md:gap-3">
      {/* MD Headers */}
      <BGrid cols={headers.length} className="p-2 hidden md:grid">
        {headers.map((head, key) => {
          return (
            <BText
              key={key}
              className={`font-bold ${key === 0 ? "col-span-2" : ""}`}
            >
              {head.label}
            </BText>
          );
        })}
      </BGrid>

      {/* MD Rows */}
      <BFlex className="gap-3 hidden md:flex">
        {rows.map((row, keyRow) => {
          return (
            <BGrid
              key={keyRow}
              cols={headers.length}
              className={className}
              onClick={() => onClick(keyRow)}
            >
              {headers.map((head, key) => {
                return (
                  <BText
                    key={key}
                    className={`${key === 0 ? "col-span-2" : ""}`}
                  >
                    {get(row, head.key)}
                  </BText>
                );
              })}
            </BGrid>
          );
        })}
      </BFlex>

      {/* Mobile Rows */}
      <BFlex className="gap-3 md:hidden">
        {rows.map((row, keyRow) => {
          return (
            <BFlex
              key={keyRow}
              className={`gap-3 ${className}`}
              orientation="row"
              onClick={() => {
                onClick(keyRow);
              }}
            >
              <BFlex className="justify-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="dark:invert w-20"
                  width={0}
                  height={0}
                  priority
                />
              </BFlex>
              <BFlex>
                {headers.map((head, key) => {
                  return (
                    <BFlex
                      orientation="row"
                      className="justify-between"
                      key={key}
                    >
                      <BText
                        className={`${
                          key === 0 ? "font-bold" : "dark:text-gray-400"
                        }`}
                      >
                        {get(row, head.key)}
                      </BText>
                    </BFlex>
                  );
                })}
              </BFlex>
            </BFlex>
          );
        })}
      </BFlex>
    </BFlex>
  );
}

export default BList;
