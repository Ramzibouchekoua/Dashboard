export default function formateNumbers(val, decimal = 0) {
  return Number(parseFloat(val, 10).toFixed(decimal));
}
