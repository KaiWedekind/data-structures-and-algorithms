# Introduction

## Integer Rounding

- `Math.floor` - rounds down to nearest integer
- `Math.round` - rounds to nearest integer
- `Math.ceil`  - rounds up to nearest integer

```js
Math.floor(0.9);  // 0 Math.floor(1.1); // 1
Math.round(0.49); // 0 Math.round(0.5); // 1
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
`Number.MAX_VALUE` is equal to 1.7976931348623157e+308.

```js
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
```

Unlike like `Number.MAX_SAFE_INTEGER`, this uses double-precision floating-point
representation and works for floating points as well.

```js
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true
```
