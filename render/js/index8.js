// 消息对话框
const btn6 = document.getElementById("btn6");
var { dialog } = require('electron').remote

btn6.onclick = () => {
    dialog.showMessageBox({
        type: "warning",
        title: "警告",
        message: "这是一个警告对话框",
        buttons: ["知道了", "无所谓"],
    }).then(res => {
        console.log(res)
    });
};