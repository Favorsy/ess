export const useNumberWithDot = (number: number | string) => 
typeof number === "number" ?
number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."):
number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");