'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '吉凶', '大凶', '白'];
    const n = Math.floor(Math.random() * results.length);
    // const n = Math.random();

    // if (n < 0.05) {
    //   btn.textContent = '大吉';
    // } else if (n < 0.2) {
    //   btn.textContent = '末吉';
    // } else {
    //   btn.textContent = '凶';
    // }

    btn.textContent = results[Math.floor(Math.random() * results.length)];


    switch (n) {
      case 0:
        btn.textContent = '大凶';
        break;
      case 1:
        btn.textContent = '凶';
        break;
      case 2:
        btn.textContent = '吉';
        break;
      case 3:
        btn.textContent = '小吉';
        break;
      case 4:
        btn.textContent = '中吉';
        break;
      case 5:
        btn.textContent = '大吉';
        break;
    }


    // if (n === 0) {
    //   btn.textContent = '大凶';
    // } else if (n === 1) {
    //   btn.textContent = '凶';
    // } else if (n === 2) {
    //   btn.textContent = '小吉';
    // } else if (n === 3) {
    //   btn.textContent = '中吉';
    // } else {
    //   btn.textContent = '大吉';
    // }
  });
}
