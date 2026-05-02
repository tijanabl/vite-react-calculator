export const saberi = (a: number, b: number): string => `${a} + ${b} = ${a + b}`
export const oduzmi = (a: number, b: number): string => `${a} - ${b} = ${a - b}`
export const pomnozi = (a: number, b: number): string => `${a} × ${b} = ${a * b}`
export const podijeli = (a: number, b: number): string => {
  if (b === 0) return 'Dijeljenje nulom nije moguće!'
  return `${a} ÷ ${b} = ${parseFloat((a / b).toFixed(2))}`
}
export const validiraj = (a: number, b: number): boolean => !isNaN(a) && !isNaN(b)