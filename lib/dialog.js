const { dialog } = require('electron');


const choose = (operation) => {
  return dialog.showOpenDialog({properties: [operation]});
}


module.exports = {
  choose
};
