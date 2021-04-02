// 底部消息提醒
const btn7 = document.getElementById('btn7')

const option = {
    title: '新消息提醒',
    body: '你有新的消息提醒'
}
btn7.onclick = ()=>{
    new window.Notification(option.title,option)
}