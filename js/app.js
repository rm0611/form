//プログラムで使用する変数の指定
var button = document.getElementById('button');
var form = document.getElementById('form');
var textarea = document.getElementById('textarea');

//文字数カウント
var maxTextNum = textarea.getAttribute('maxlength');

//イベント処理 お問い合わせボタンを押した時
button.addEventListener('click', function() {
  //show form
  form.style.display = 'block';
});

//残り文字数を表示する要素の追加
var textMessage = document.createElement('div');
var parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

//テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function() {
  var currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum-currentTextNum) + '」文字まで入力が可能です！</p>';
});








/*****
var practice = document.getElementById('practice');
practice.innerHTML = 'れんしゅう！';

practice.style.backgroundColor = '#999999';
practice.style.fontSize = '200%';
practice.style.color = '#d3041b';


var whatever = document.createElement('div');
whatever.setAttribute('id', 'whatever');
whatever.innerHTML = '<p>要素をここに追加</p>';
practice.insertBefore(whatever, null);

var second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加します!</p>';
practice.insertBefore(second, whatever);

//要素を削除
parent = whatever.parentElement;
parent.removeChild(whatever);
*****/