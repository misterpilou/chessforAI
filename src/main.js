/**
 * Created by misterpilou on 29/09/2018.
 */
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        "webPreferences": {
            "webSecurity": false
        }
    });

    win.loadURL(url.format({
        pathname: __dirname + '/html/index.html',
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);