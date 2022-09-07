import formateNumbers from "./formateNumbers";
import numberWithCommas from "./formateNumbersWithCommas";

export default function formateBigNumbers(num) {
  if (num < 999) {
    return numberWithCommas(formateNumbers(num));
  }

  if (num < 1000000) {
    return `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`;
  }

  if (num < 10000000) {
    return `${Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1)}M`;
  }

  if (num < 1000000000) {
    return `${Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1)}M`;
  } else if (num > 1000000000) {
    return `${Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1)} B`;
  }

  return num;
}
