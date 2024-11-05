/**
 * Format a number as a currency string.
 *
 * @param number - The number to be formatted.
 * @param currency - The currency for the number.
 * @param decimals - The number of decimal places to be displayed. Defaults to 0.
 * @returns A string in the format of 'XXX,XXX,XXX.XX', where the number of decimal places is determined by the decimals parameter.
 */

export const formatCurrency = (number: number, currency: string, decimals = 0) => {
  return number.toLocaleString('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals
  });
};
