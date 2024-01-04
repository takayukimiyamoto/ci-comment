const fs = require('fs');
const message_old = require('../staticfiles/message_old.json');
const message_new = require('../staticfiles/message_new.json');

// 差分のある messageCode を格納する配列
const diffs = [];
// 2つの配列を比較する
for (const message of message_old) {
  if (!message_new.some((item) => item.code === message.code)) {
    diffs.push(message.code);
  }
}

const comment = `\
    <h1>以下の差分が発生しました。</h1>\
    <h2>追加</h2>\
    <ul>\
        <li><code>${diffs}</code></li>\
    </ul>\
    <h2>変更</h2>\
    <ul>\
        <li><code>${diffs}</code></li>\
    </ul>\
  `;

// 差分のある messageCode を表示する
console.log(diffs);
fs.writeFile('check.log', comment, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ログが書き込まれました。');
  }
});