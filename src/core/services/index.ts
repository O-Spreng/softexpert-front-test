export function getLegibleTextColor(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  let result = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return result > 0.5 ? '#272727' : '#fafafa';
}

export const generateRandomColor = () => {
  const randomColorNumber = Math.floor(Math.random() * 0xFFFFFF);
  const hexColor = randomColorNumber.toString(16).padStart(6, '0');

  return `#${hexColor}`
};

export function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
