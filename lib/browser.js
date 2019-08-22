const processExists = require('process-exists');
const BrKill = require('browser-kill');
const { ProcessName, ProcessNameConstants } = require('process-name');

const { BROWSERS } = ProcessNameConstants;


const isRunning = async () => {
  const chrome = ProcessName.BROWSERS[BROWSERS.CHROME][process.platform];
  return await processExists(chrome);
};


const kill = async () => {
  await BrKill.chrome();
};


module.exports = {
  isRunning,
  kill
};
