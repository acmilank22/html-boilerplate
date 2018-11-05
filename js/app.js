const o = {
  a: 1,
  b: {
    c: [
      2,
      {
        d: 3
      }
    ],
    e: {
      f: {
        g: 4
      }
    }
  },
  h: [
    {
      i: 5
    },
    {
      j: { k: 6 }
    }
  ]
};

const s = qs.stringify(o);

console.log(s);
console.log(qs.parse(s));
