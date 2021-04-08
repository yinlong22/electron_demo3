const {Menu, BrowserWindow, app} = require("electron");

// 菜单栏
const template = [
    {
        label: "第一项",
        submenu: [
            {
                label: "1.1",
                accelerator: `ctrl+n`,//快捷键
                click: () => {
                    let win = new BrowserWindow({
                        width: 300,
                        height: 300,
                    });
                    win.loadFile(require('path').join(__dirname, '../render/yellow.html')).then(r => console.log(r));
                    win.on('close', () => {
                        win = null;
                    })
                },
            },
            {label: "1.2"},
        ],
    },
    {
        label: "第二项",
        submenu: [{label: "2.1"}, {label: "2.2"}],
    },
    {
        label: '退出',
        submenu: [
            {
                label: "exit",
                accelerator: 'Command+Q',
                click: function () {
                    app.quit()
                }
            }
        ],
    },
];

// dock栏
const dockMenu = Menu.buildFromTemplate([
    {
        label: 'New Window',
        click() {
            console.log('New Window')
        }
    }, {
        label: 'New Window with Settings',
        submenu: [
            {label: 'Basic'},
            {label: 'Pro'}
        ]
    },
    {label: 'New Command...'}
])

app.whenReady().then(() => {
    app.dock.setMenu(dockMenu)
    app.dock.setIcon('./img.png')
})

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
