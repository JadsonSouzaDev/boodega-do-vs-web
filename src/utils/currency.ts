export const formatCurrency = (amount: number): string => {
  console.log(amount)
  const real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    useGrouping: true,
  });

  return real.format(amount).replace('R$', '');
};
