import BFlex from "@/components/BFlex";
import { formatCurrency } from "@/utils/currency";

type BButtonPriceType = {
  label: string;
  price: number;
  selected?: boolean;
};

const BButtonPrice = ({ label, price, selected }: BButtonPriceType) => {
  const commonClass = "text-sm font-medium rounded-lg px-4 py-4";
  const normalClass =
    "border bg-black dark:bg-transparent dark:border-white border-sky-transparent text-sky-500 text-white hover:bg-sky-600 hover:text-white";
  const selectedClass = "bg-sky-600 hover:bg-sky-700";

  return (
    <BFlex orientation="row" className="items-center">
      <button
        type="button"
        className={`${commonClass} ${selected ? selectedClass : normalClass}`}
      >
         {label} - R${formatCurrency(price)}
      </button>
    </BFlex>
  );
};

export default BButtonPrice;
