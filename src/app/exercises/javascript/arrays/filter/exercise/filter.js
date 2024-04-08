export function getEvenNumber(numbers) {
  return numbers.filter(number => number % 2 === 0)
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6]))
