const { dialog } = require('electron');
const { ProcessName, ProcessNameConstants } = require('process-name');


const choose = (operation) => {
  return dialog.showOpenDialog({properties: [operation]});
}


const message = (type, buttons, title, message, detail) => {
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
