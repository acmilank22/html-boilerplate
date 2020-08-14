document.getElementById('button').addEventListener('click', () => {
  fetch('https://api.github.com/search/repositories?q=react')
    .then((res) => res.json())
    .then((data) => {
      const { total_count: totalCount } = data;
      window.wx.miniProgram.redirectTo({
        url: `/pages/elevator/index?total_count=${totalCount}`,
      });
    });
});
