'use strict';

// Import parts of electron to use
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const url = require('url')
const ChromeCookie = require('chrome-cookie');

const CCookie = new ChromeCookie();
const { Constants, Dialog, File, Messages } = require('./lib');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;
if ( process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath) ) {
  dev = true;
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024, height: 768, show: false
  });

  // and load the index.html of the app.
  let indexPath;
  if ( dev && process.argv.indexOf('--noDevServer') === -1 ) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL( indexPath );

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Open the DevTools automatically if developing
    if ( dev ) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


//  Processing on export
ipcMain.on(Constants.EVENTS.EXPORT.START, async (event, arg) => {
  try {
    const cookies = await CCookie.getCookie(arg);

    // Choosing path for saving file
    const path = Dialog.choose(Constants.CHOOSE_PATH);
    const filename = File.name(arg);
    const data = {
      domain: arg,
      cookies: cookies
    };

    // Writing cookies to file
    File.write(filename, path, JSON.stringify(data));

    // Sending export complete event
    mainWindow.webContents.send(Constants.EVENTS.EXPORT.COMPLETE, `${path}/${filename}.json`);
  } catch (err) {
    console.error(err);
    mainWindow.webContents.send(Constants.EVENTS.EXPORT.ERROR, err.message);
  }
});

//  Processing on import
ipcMain.on(Constants.EVENTS.IMPORT.START, async () => {
  try {
    const filePath = Dialog.choose(Constants.CHOOSE_FILE);
    if (!filePath) {
      console.log(Messages.NO_FILE_SELECTED);
      return mainWindow.webContents.send(Constants.EVENTS.IMPORT.ERROR, {
        message: Messages.NO_FILE_SELECTED
      });
    }

    // Get raw strinfied data from file
    let data = File.read(filePath[0]);
    if (!data) {
      throw Messages.NOT_VALID_DUMP;
    }

    data = JSON.parse(data);
    let { domain, cookies } = data;

    // Remove before setting cookie from dump
    await CCookie.removeCookie(domain);
    await CCookie.setCookie(cookies);

    mainWindow.webContents.send(Constants.EVENTS.IMPORT.COMPLETE);
  } catch (err) {
    console.error(err);
  }
});
