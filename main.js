const {app, BrowserWindow, BrowserView, globalShortcut } = require("electron");
let mainWindow = null;
require('./main/menu')

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
    });
    mainWindow.loadFile(require('path').join(__dirname, './render/index.html')).then(r => console.log(r));
    mainWindow.webContents.openDevTools()
    // 注册全局快捷键
    globalShortcut.register('ctrl+y',()=>{
        // let isRegister = globalShortcut.isRegistered(`ctrl+y`)?'true':'false'
        // console.log(isRegister)
        mainWindow.loadURL('https://www.baidu.com').then(r => console.log(r+'快捷键1'))
    })
    globalShortcut.register('ctrl+z',()=>{
        mainWindow.loadFile(require('path').join(__dirname, './render/index.html')).then(r => console.log(r+'快捷键2'))
    })
    // 通过BrowserView嵌入窗口
    const viewWindow = new BrowserView(); // 定义实例
    mainWindow.setBrowserView(viewWindow); // 主窗口设置viewWindow可用
    viewWindow.setBounds({x: 0, y: 150, width: 300, height: 800});
    viewWindow.webContents.loadURL('https://www.baidu.com').then(r => console.log(r))
    mainWindow.on("close", () => {
        mainWindow = null;
    });
});