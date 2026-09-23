// Funció per saludar
export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}

// Funció per comprovar si és major d'edat
export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}

// Funció per sumar els elements d'un array
export function sumarArray(nums: number[]): number {
  return nums.reduce((total, num) => total + num, 0);
}