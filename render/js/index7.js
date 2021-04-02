// 选择文件
const btn5 = document.getElementById('btn5');
const fs = require('fs');
var {dialog} = require('electron').remote;
btn5.onclick = ()=>{
    dialog.showSaveDialog({
        title: '选择文件'
    }).then(res => {
        console.log(res);
        fs.writeFileSync(res.filePath, '你好啊');
    }).catch(err =>{
        console.log(err)
    })
}