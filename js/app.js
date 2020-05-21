function debounce(func, delay) {
  let id = null;
  return function () {
    clearTimeout(id);
    id = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function throttle(func, delay) {
  let isExec = true;
  return function () {
    if (!isExec) {
      return;
    }
    isExec = false;
    setTimeout(() => {
      func.apply(this, arguments);
      isExec = true;
    }, delay);
  };
}

console.log(debounce, throttle);

/* function difference(array1, array2) {
  const array = [...array1, ...array2];
  return array.filter(
    (item) => !(array1.includes(item) && array2.includes(item))
  );
}

function generateRandom({ min, max } = {}) {
  return Math.random() * (max - min + 1) + min;
}

generateRandom(); */
