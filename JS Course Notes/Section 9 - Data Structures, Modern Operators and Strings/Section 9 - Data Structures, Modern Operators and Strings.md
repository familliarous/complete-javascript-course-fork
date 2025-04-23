
# [21/04/2025] NOTES

# 108. Destructuring Arrays 

- Destructuring - Breaking down a larger Data Structure into separate variables
- Destructuring an array - done in demo:
```
const [x, y, z] = arr; // <-- Destructuring  Assignment, assign array elements from an existing array object to individual variables


```
- Nested Destructuring - done in demo:
```
const nested = [2, 4, [5, 6]];

const [i, , j] = nested;

console.log(i, j); // 2, [5, 6]

const [l, , [m, n]] = nested;

console.log(l, m, n); // 2, 5, 6

```

- Setting default values for destructuring (USEFUL FOR API):
```

const [p = 3, q = 2, r = 1] = [8, 9];

console.log(p, q, r); // 8, 9, 1

```
# [22/04/2025] NOTES

# 109. Practice Assignments

- TODO in own time

# 110. Destructuring Objects

- 