const { ipcRenderer } = require('electron')

// 拖拽
document.getElementById('drag').ondragstart =(event)=>{
    event.preventDefault()
    ipcRenderer.send('ondragstart','/Users/yuanyuan/Desktop/electron_demo/electron_demo3/drag.txt')
}

// 暗黑模式
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle')
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
document.getElementById('reset-to-system').addEventListener('click', async () => {
    await ipcRenderer.invoke('dark-mode:system')
    document.getElementById('theme-source').innerHTML = 'System'
})