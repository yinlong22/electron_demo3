
// 创建新窗口
// remote
const BrowserWindow = require('electron').remote.BrowserWindow;
const btn = document.querySelector('#btn');
window.onload = ()=>{
    btn.onclick = ()=>{
        let newWindow = new BrowserWindow({
            width: 300,
            height: 300,
        })
        newWindow.loadFile(require("path").join(__dirname, 'yellow.html')).then(r => console.log(r));
        newWindow.on('close',()=>{
            newWindow = null;
        })
    }
}