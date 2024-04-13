const btn = document.getElementById('btn');
const text = document.getElementById('text');

setTimeout(() => {
    const childList = document.createElement('li');
    childList.textContent = 'ボタンをクリックしました';
    text.appendChild(childList);
    text.textContent = 'ボタンをクリックしました';
}, 2000);
