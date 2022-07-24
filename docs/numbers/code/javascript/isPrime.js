// Time Complexity: O(n)
export default function isPrime (n) {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
}

// Time Complexity: O(sqrt(n))
export default function isPrime (n) {
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