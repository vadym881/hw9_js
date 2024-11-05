function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeNumber(numArray) {
  return numArray.filter(isPrime);
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(primeNumber(numbers));