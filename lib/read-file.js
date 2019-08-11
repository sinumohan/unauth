const fs = require('fs');


const readFile = (path) => {
  try {    
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.info('Failed to write file');
    throw err;
  }
}


module.exports = readFile;
