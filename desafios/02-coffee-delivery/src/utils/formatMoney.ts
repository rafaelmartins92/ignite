export function formatMoney(value: number) {
  return value.toLocaleString('en', {
    minimumFractionDigits: 2,
  });
}
