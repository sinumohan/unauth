const fs = require('fs');


const writeFile = (filename, path, contents) => {
  try {
    const filePath = `${path}/${filename}.json`;
    
    fs.writeFileSync(filePath, contents, 'utf8');
    console.info(`File saved at ${filePath}`);
  } catch (err) {
    console.info('Failed to write file');
    throw err;
  }
}


module.exports = writeFile;
