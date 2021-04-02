// 子窗口发来信息
const btn3 = document.getElementById('btn3');
btn3.onclick = ()=>{
    window.opener.postMessage('子窗口发来信息')
}