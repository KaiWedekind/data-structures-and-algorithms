export default function allPrimesLessThanN (n) {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

export function isPrime (n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;

  // check from 2 to n-1
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}
