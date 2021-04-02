// 剪切板
const btn8 = document.getElementById('btn8');
const message2 = document.getElementById('message2');
const { clipboard } = require('electron');
btn8.onclick = ()=>{
    clipboard.writeText(message2.innerHTML)
    alert('复制成功')
}