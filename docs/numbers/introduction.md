# Introduction

## Integer Rounding

- `Math.floor` - rounds down to nearest integer
- `Math.round` - rounds to nearest integer
- `Math.ceil`  - rounds up to nearest integer

```js
Math.floor(0.9);  // 0
Math.floor(1.1);  // 1
Math.round(0.49); // 0
Math.round(0.5);  // 1
Math.round(2.9);  // 3
Math.ceil(0.1);   // 1 
Math.ceil(0.9);   // 1 
Math.ceil(21);    // 21
Math.ceil(21.01); // 22
```

## Number.EPSILON

Number.EPSILON returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation.

```js
function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.1 + 0.2, 0.3); // trues
```

This function works by checking whether the difference between the two numbers are smaller than Number.EPSILON. Remember that Number.EPSILON is the smallest difference between two representable numbers. The difference between 0.1+0.2 and 0.3 will be smaller than Number.EPSILON.

## Maximums

Number.MAX_SAFE_INTEGER returns the largest integer.

```js
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true
```

This returns true because it cannot go any higher. However, it does not work for floating-point decimals.

```js
Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022; // false
```

`Number.MAX_VALUE` returns the largest floating-point number possible.  
`Number.MAX_VALUE` is equal to `1.7976931348623157e+308`.

```js
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
```

Unlike like `Number.MAX_SAFE_INTEGER`, this uses double-precision floating-point
representation and works for floating points as well.

```js
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true
```

## Minimums

`Number.MIN_SAFE_INTEGER` returns the smallest integer. `Number.MIN_SAFE_INTEGER` is equal to `-9007199254740991`.

```js
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true
```

This returns true because it cannot get any smaller. However, it does not work for
floating-point decimals.

```js
Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022; // false
```

`Number.MIN_VALUE` returns the smallest floating-point number possible.
`Number.MIN_VALUE` is equal to 5e-324. This is not a negative number since it is the smallest floating-point number possible and means that `Number.MIN_VALUE` is actually bigger than `Number.MIN_SAFE_INTEGER`.  
`Number.MIN_VALUE` is also the closest floating point to zero.

```js
Number.MIN_VALUE - 1 == -1; // true
```
This is because this is similar to writing `0 - 1 == -1`.

## Infinity

The only thing greater than `Number.MAX_VALUE` is `Infinity`, and the only thing smaller than `Number.MAX_SAFE_INTEGER` is `-Infinity`.

```js
Infinity > Number.MAX_SAFE_INTEGER; // true
-Infinity < Number.MAX_SAFE_INTEGER // true;
-Infinity -32323323 == -Infinity -1; // true
```

This evaluates to true because nothing can go smaller than `-Infinity`.

## Size Summary

This inequality summarizes the size of JavaScript numbers from smallest (left) to largest (right):

`-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_IN- TEGER < Number.MAX_VALUE < Infinity`

## Number Algorithms

### Primality Test

<<< @/numbers/code/javascript/O(n)/isPrime.js

<<< @/numbers/code/javascript/O(sqrt(n))/isPrime.js


### Prime Factorization

<<< @/numbers/code/javascript/O(sqrt(n))/primeFactors.js

```js
primeFactors(10); // prints '5' and '2'
```

Time Complexity: O(sqrt(n))

### Random Number Generators

Random number generation is important to simulate conditions. JavaScript has a built-in function for generating numbers: `Math.random()`.

`Math.random()` returns a float between 0 and 1.

- Floats between 0  and  100: `Math.random() * 100;`
- Floats between 5  and  30: `Math.random() * 25 + 5;`
- Floats between -100 and -90: `Math.random() * 10 - 100;`

To get random integers, simply use Math.floor(), Math.round(), or Math.ceil() to round to an integer.

- Integer between 0 and 99: `Math.floor(Math.random() * 100);`
- Integer between 5 and 30: `Math.round(Math.random() * 25) + 5;`
- Integer between -100 and -90: `Math.ceil(Math.random() * 10) - 100;`

### Modular Exponentiation

```js
function modularExponentiation ( base, exponent, modulus ) {
  return Math.pow(base,exponent) % modulus;
}
```

Time Complexity: O(n)
```js
function modularExponentiation ( base, exponent, modulus ) {
  if (modulus == 1) return 0;

  let value = 1;

  for ( let i = 0; i < exponent; i++ ) {
    value = = (value * base) % modulus;
  }

  return value;
}
```

## Print all primes less than n

<<< @/numbers/code/javascript/O(nsqrt(n))/allPrimesLessThanN.js

```js
allPrimesLessThanN(15); // prints 2, 3, 5, 7, 11, 13
```

Time Complexity: O(nsqrt(n))

This is because isPrime with a time complexity of O(sqrt(n)) is run n times.


