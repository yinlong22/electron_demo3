// 创建子窗口
const btn2 = document.getElementById('btn2');
btn2.onclick = ()=>{
    window.open('child.html')
}

// 子窗口与父窗口通信
const message = document.getElementById('message')
window.addEventListener('message',msg => {
    console.log(msg)
    message.innerHTML = msg.data
})