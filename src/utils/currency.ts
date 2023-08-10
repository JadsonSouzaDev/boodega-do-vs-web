export const formatCurrency = (amount: number): string => {
  const real = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    useGrouping: true,
  });

  return real.format(amount).replace('R$', '');
};
