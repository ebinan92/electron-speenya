"use strict";
let electron = require("electron");
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;


function onAppReady() {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize; // ディスプレイのサイズを取得する
    let mainWindow = new BrowserWindow({
        left: 0,
        top: 0,
        width: width,   // 最大サイズで表示する
        height: height, // 最大サイズで表示する
        frame: true,      // ウィンドウフレームを非表示に
        show: true,
        transparent: true, // 背景を透明に
        resizable: true,
        'always-on-top': true // 一番手前に表示する
    });

    // 透明な部分のマウスのクリックを検知させない
    // mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    //BrowserWindow.addDevToolsExtension(extensionDir);
    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', () => setTimeout(onAppReady, 300));

