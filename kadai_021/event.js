//btnというidを持つHTML要素を取得して、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得して、定数に代入する
const text =document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{
//2秒の待ち時間を設定し、非同期処理を実行する
setTimeout(() =>{
    text.textContent='ボタンをクリックしました';
},2000);

});
