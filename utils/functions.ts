export function sum(a: number, b: number) {
  // if (a === 3) return 0 // sengaja di salahin
  return a + b;
}
export function dateFormat(country: string) {
  if (country === 'sg') {
    return "MM-DD-YYYY"
  } else if (country === 'asia') {
    return "DD-MM-YYYY"
  }
  return "YYYY-MM-DD"
}
