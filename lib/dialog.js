const { dialog } = require('electron');
const { ProcessName, ProcessNameConstants } = require('process-name');


const choose = (operation) => {
  return dialog.showOpenDialog({properties: [operation]});
}


const message = (type, buttons, title, message, detail) => {
  browser = ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.CHROME][process.platform]
  return dialog.showMessageBox({
    type,
    buttons,
    title,
    message,
    detail
  })
}


module.exports = {
  choose,
  message
};
