const promise = new Promise((resolve, reject) => {
  console.log(0);
  resolve();
  console.log(1);
});

promise.then(() => console.log(2)).catch(() => console.log(3));

console.log(4);

/* new Promise((resolve, reject) => {
  console.log(0);
  resolve();
  console.log(1);
})
  .then(() => console.log(2))
  .catch(() => console.log(3));

console.log(4); */
