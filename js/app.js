const limit = 20;
let offset = 0;
let promises = [];

function getData({ offset }) {
  return fetch(
    `https://www.zhihu.com/api/v4/answers/97093844/comments?limit=${limit}&offset=${offset}`
  )
    .then(res => res.json())
    .then(({ data }) => data);
}

while (offset < 1527) {
  promises.push(getData({ offset }));
  offset += limit;
}

Promise.all(promises).then(dataList => {
  let list = [];
  for (const data of dataList) {
    for (const item of data) {
      const { content, author } = item;
      const { member } = author;
      const { name } = member;
      list.push({ name, content });
    }
  }
  console.log(JSON.stringify(list));
});
