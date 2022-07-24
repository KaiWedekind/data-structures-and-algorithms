# Introduction

## String Primitive

### String Access

For accessing characters, you use .chartAt().

```js
'dog'.charAt(1); // returns "o"
```

.charAt(index) takes an index (which starts at 0) and returns the character at that index location in the string.

For string (multiple-character) access, you can use .substring(startIndex, endIndex), which will return the characters between the specified indices.

- 'YouTube'.substring(1, 2); // returns 'o'
- 'YouTube'.substring(3, 7); // returns 'Tube'

If you do not pass a second parameter (endIndex), it will return all the character values from the specified start position until the end.

### String Search

- 'Red Dragon'.indexOf('Red'); // returns 0
- 'Red Dragon'.startsWith('Red'); // returns true
- 'Red Dragon'.endsWith('Dragon'); // returns true

### String Decomposition

```js
let test1 = 'chicken,noodle,soup,broth';
test1.split(","); // ["chicken", "noodle", "soup", "broth"]
```

```js
let test1 = 'chicken';
test1.split(""); // ["c", "h", "i", "c", "k", "e", "n"]
```

### String Replace

```js
"Wizard of Oz".replace("Wizard","Witch"); // "Witch of Oz"
```