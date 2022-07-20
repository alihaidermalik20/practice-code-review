# Sort Numbers: use a built-in array method

Write a function that removes specific values from an array. The values to
remove are provided as a second array argument.

---

## Strategy

I chose to used filter method as i decide to keep it simple and understandable.

---

## Implementation

There were some rules which i need to follow so:

- To avoid side-effects I needed to create a copy and sort the copy.
- I used loop `for` to check each element in arrays and return only one value
  (if there more than one same value in one array).

---

## Use Cases

You could use this array to delete some specific files from database.

```js
const allWorkers = ['John', 'Peter', 'Bob'];
const releasedWorkers = ['Peter', 'Bob'];
const newListOfWorkers = allWorkers.filter(val) => !releasedWorker.includes(val)
console.log(newListOfWorkers); // ['John']
```

---

## Inspiration

It was quite difficult for me to find some example which can help to start write
my solution. I checked a lot of web pages and create my solution from few
different functions.
