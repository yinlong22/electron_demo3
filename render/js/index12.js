const {app, mainWindow} = require("electron").remote;
const notification = {
    title: '基本通知',
    title2: '开始程序通知',
    body: '短消息部分',
    icon: '../img.png', // 用于在该通知上显示的图标
    silent: true, // 在显示通知时是否发出系统提示音
}
const notificationButton = document.getElementById('basic-noti')
const myNotification = () => {
    new window.Notification(notification.title2, notification)
}
notificationButton.addEventListener('click', function () {
    const myNotification = new window.Notification(notification.title, notification)
    myNotification.onclick = () => {
        console.log('Notification clicked')
    }
})
app.whenReady().then(mainWindow).then(myNotification)


