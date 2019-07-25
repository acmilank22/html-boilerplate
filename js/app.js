const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const promises = alphabet.map(letter =>
  fetch(
    `https://api.npms.io/v2/search/suggestions?q=${letter}&size=${100}`
  ).then(res => res.json())
);

Promise.all(promises).then(res => {
  let list = [];
  res.forEach(item => {
    list = [...list, ...item];
  });
  const array = list.sort((a, b) => {
    const scoreA = a.score.final;
    const scoreB = b.score.final;
    if (scoreA < scoreB) {
      return 1;
    }
    if (scoreA > scoreB) {
      return -1;
    }
    return 0;
  });
  console.log(array);
});
