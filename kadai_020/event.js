// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
    // li要素を新しく作成(DOM操作)
    const childList = document.createElement('li');

    // 作成したli要素にテキストを追加(DOM操作)
    childList.textContent = 'ボタンをクリックしました';

    // 作成したli要素をul要素の子要素として末尾に追加(DOM操作)
    text.appendChild(childList);

    // id="text"の文章を書き換えるには、textContentを使う(DOM操作)
    text.textContent = 'ボタンをクリックしました';


});