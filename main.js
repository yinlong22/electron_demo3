const {app, BrowserWindow, BrowserView, globalShortcut, Menu, Tray} = require("electron");
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
    mainWindow.webContents.openDevTools()// 打开开发者工具

    // 跳转
    mainWindow.loadFile(require('path').join(__dirname, './render/index.html')).then(r => console.log(r));

    // 注册全局快捷键
    globalShortcut.register('ctrl+y', () => {
        // let isRegister = globalShortcut.isRegistered(`ctrl+y`)?'true':'false'
        // console.log(isRegister)
        mainWindow.loadURL('https://www.baidu.com').then(r => console.log(r + '快捷键1'))
    })
    globalShortcut.register('ctrl+z', () => {
        mainWindow.loadFile(require('path').join(__dirname, './render/index.html')).then(r => console.log(r + '快捷键2'))
    })

    // 通过BrowserView嵌入窗口
    const viewWindow = new BrowserView(); // 定义实例
    mainWindow.setBrowserView(viewWindow); // 主窗口设置viewWindow可用
    viewWindow.setBounds({x: 0, y: 300, width: 300, height: 800});
    viewWindow.webContents.loadURL('https://www.baidu.com').then(r => console.log(r))
    mainWindow.on("close", () => {
        mainWindow = null;
    });

    // 系统托盘图标
    const tray = new Tray(__dirname + '/img.png');
    const contextMenu = Menu.buildFromTemplate([ // 菜单项
        {
            label: '显示', type: 'radio', click: () => {
                mainWindow.show()
            }
        },
        {
            label: '隐藏', type: 'radio', click: () => {
                mainWindow.hide()
            }
        },
    ])
    // tray.on('click', () => { //  鼠标点击事件最好和菜单只设置一种
    //   win.isVisible() ? win.hide() : win.show()
    // })
    tray.setToolTip('This is my application.') // 鼠标放上时候的提示
    tray.setContextMenu(contextMenu) // 应用菜单项

    // 开始时的生命周期
    mainWindow.setProgressBar(0.3) //进度条
    setTimeout(() => {
        mainWindow.setProgressBar(0.6) //进度条
    }, 2000)
    setTimeout(() => {
        mainWindow.setProgressBar(0.9) //进度条
    }, 3000)
    setTimeout(() => {
        mainWindow.setProgressBar(-1) //进度条
    }, 5000)
});

