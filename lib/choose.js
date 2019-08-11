const { dialog } = require('electron');


module.exports = (operation) => {
  return dialog.showOpenDialog({properties: [operation, 'openDirectory', 'multiSelections']});
}
