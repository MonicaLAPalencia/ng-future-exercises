export function getPoweredByTwo(numbers) {
  return numbers.map(x => x ** x)
}

console.log(getPoweredByTwo([1, 2, 3, 4, 5]))
