export const formatCurrency = (number: number, currency: string, decimals = 0) => {
  return number.toLocaleString('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals
  });
};
