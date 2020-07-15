'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
    'breath',
    'color',
    'life',
    'hello,world',
    'help',
    'window',
    'server',
    'water',
    'fire',
    'human',
    'planet',
    'football'
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  const timeLimit = 30 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLavel = document.getElementById('score');
  const missLavel = document.getElementById('miss');
  const timerLavel = document.getElementById('timer');

  // target.textContent = word;
  
  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLavel.textContent = (timeLeft / 1000).toFixed(2);

    const timeOutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if (timeLeft < 0) {
      isPlaying = false;

      clearTimeout(timeOutId);
      timerLavel.textContent = '0.00';
      setTimeout(() => {
        showrResult();
      },100);

      target.textContent = 'click to replay';
    }


  }

  function showrResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`score:${score} miss:${miss} 正答率:${accuracy.toFixed(2)}%`);
  }

  window.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;

    loc;
    score;
    miss;
    scoreLavel.textContent = score;
    missLavel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener('keydown', e => {
    // ゲームが始まる前はキー操作させたくない
    if (isPlaying === false) {
      return;
    }

    // console.log(e.key);
    if (e.key === word[loc]) {
      // console.log('score');
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget();
      score++;
      scoreLavel.textContent = score;
    } else {
      // console.log('miss');
      miss++;
      missLavel.textContent = miss;
    }
  });

}