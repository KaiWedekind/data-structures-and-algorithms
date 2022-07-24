# Introduction

The Big-O notation measures the worst-case complexity of an algorithm. In Big-O notation, n represents the number of inputs. The question asked with Big-O is the following: “What will happen as n approaches infinity?”
When you implement an algorithm, Big-O notation is important because it tells you how efficient the algorithm is.

## Rules of Big-O Notation

- Coefficient rule
- Sum rule
- Product rule
- Transitive rule
- Polynomial rule
- Log of a power rule

## Examples

### O(n²)
```js
function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (let j = 0; j < n * 20; j++) {
      console.log(i+j);
    }
  }
}
```
There are two nested loops. Ignore the constants in front of n.

### O(n³)
```js
function someFunction(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log(i+j+k+l);
        }
      }
    }
  }
}
```
There are four nested loops, but the last loop runs only until 10.

### O(1)
```js
function someFunction(n) {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}
```
Constant complexity. The function runs from 0 to 1000. This does not depend on n.

### O(n)
```js
function someFunction(n) {
  for (let i = 0; i < n * 10; i++) {
    console.log(i);
  }
}
```
Linear complexity. The function runs from 0 to 10n. Constants are ignored in Big-O.

### O(log₂n)
```js
function someFunction(n) {
  for (let i = 0; i < n; i * 2) {
    console.log(i);
  }
}
```
Logarithmic complexity. For a given n, this will operate only log2n times because i is incremented by multiplying by 2 rather than adding 1 as in the other examples.

### O(∞)
```js
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
```
Infinite loop. This function will not end.

<!--
Superscript: ⁰¹²³⁴⁵⁶⁷⁸⁹
Subscript: ₀₁₂₃₄₅₆₇₈₉
-->

