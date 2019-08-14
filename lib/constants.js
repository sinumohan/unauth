module.exports = {
  EVENTS: {
    EXPORT: {
      START: 'export:start',
      COMPLETE: 'export:complete',
      ERROR: 'export:error'
    },
    IMPORT: {
      START: 'import:start',
      COMPLETE: 'import:complete',
      ERROR: 'import:error'
    }
  },
  CHOOSE_PATH: 'openDirectory',
  CHOOSE_FILE: 'openFile',
  STATUS: {
    SUCCESS: 'success',
    ERROR: 'error'
  }
};
