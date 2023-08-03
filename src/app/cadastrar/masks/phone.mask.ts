export const formatPhone = (rawPhone: string): string => {
  // fiter and acess digits
  const onlyDigits = rawPhone.replace(/\D/g, "");
  const d = (index: number): string => {
    return onlyDigits[index] ?? " ";
  };

  // mask result
  const formatedPhone = `(${d(0)}${d(1)})${d(2)}${d(3)}${d(4)}${d(5)}${d(
    6
  )}-${d(7)}${d(8)}${d(9)}${d(10)}`;

  // show only digits typed
  const countDigits = onlyDigits.length;
  let end = onlyDigits.length;
  if (countDigits >= 1) end = end + 1;
  if (countDigits >= 3) end = end + 1;
  if (countDigits >= 8) end = end + 1;

  return formatedPhone.slice(0, end);
};
