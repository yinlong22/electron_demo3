// 断网提醒
window.addEventListener('online',()=>{
    alert('网络正常，放心使用')
})

window.addEventListener('offline',()=>{
    alert('网络异常，请检查网络是否连接')
})