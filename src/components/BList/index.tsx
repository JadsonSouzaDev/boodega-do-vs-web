import BFlex from "../BFlex";
import BGrid from "../BGrid";
import BText from "../BText";
import get from "lodash/get";

type RowList = {
  label: string;
  key: string;
};

type BListProps<Type> = {
  headers: RowList[];
  rows: Type[];
};

function BList<Type>({ rows, headers }: BListProps<Type>) {
  const className =
    "p-2 md:p-3 border border-gray-300 rounded-lg dark:border-gray-600 hover:bg-sky-300 hover:dark:bg-sky-700 hover:cursor-pointer";

  return (
    <BFlex className="gap-2 md:gap-3">
      {/* Headers */}
      <BGrid cols={headers.length} className="p-2 ">
        {headers.map((head, key) => {
          return <BText key={key} className={`font-bold ${key === 0 ? 'col-span-1': 'col-span-1'}`}>{head.label}</BText>;
        })}
      </BGrid>

      {/* Rows */}      
        {rows.map((row) => {
          return (
            <BGrid cols={headers.length} className={className}>
              {headers.map((head, key) => {
                return <BText key={key} className={`${key === 0 ? 'col-span-1': 'col-span-1'}`}>{get(row, head.key)}</BText>;
              })}
            </BGrid>
          );
        })}
      
    </BFlex>
  );
}

export default BList;
