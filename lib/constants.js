module.exports = {
  APP_NAME: 'NoMoCred',
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
  STATUS: {
    SUCCESS: 'success',
    ERROR: 'error'
  },
  CHOOSE_PATH: 'openDirectory',
  CHOOSE_FILE: 'openFile',
  YES: 'Yes',
  NO: 'No',
  DIALOG_TYPES: {
    WARNING: 'warning'
  }
};
