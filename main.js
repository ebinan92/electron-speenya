"use strict";
let electron = require("electron");
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;


function onAppReady() {
    const display = electron.screen.getAllDisplays()[0]; //表示したいディスプレイに応じて数字を変える.
    let mainWindow = new BrowserWindow({
        x: display.bounds.x,
        y: display.bounds.y,
        width: display.bounds.width,
        height: display.bounds.height,
        frame: false, // ウィンドウフレームを非表示に
        show: true,
        resizable: false,
        transparent: true, // 背景を透明に
        alwaysOnTop: true // 一番手前に表示する
    });

    // 透明な部分のマウスのクリックを検知させない
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    // console.log(mainWindow.getPosition());
    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', () => setTimeout(onAppReady, 300));
