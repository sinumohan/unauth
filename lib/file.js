const fs = require('fs');


const read = (path) => {
  try {    
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.info('Failed to write file');
    throw err;
  }
};


const write = (filename, path, contents) => {
  try {
    const filePath = `${path}/${filename}.json`;
    
    fs.writeFileSync(filePath, contents, 'utf8');
    console.info(`File saved at ${filePath}`);
  } catch (err) {
    console.info('Failed to write file');
    throw err;
  }
};


const name = (domain) => {
  const REPLACE_REGEX = / :.t\//g;
  return (`${domain}-${(new Date().toISOString()).toString().toLowerCase()}`).replace(REPLACE_REGEX, '-');
};


module.exports = {
  read,
  write,
  name
};
