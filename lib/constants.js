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
      ERROR: 'import:error',
      BROWSER: {
        KILL: {
          START: 'import:browser:kill:start',
          COMPLETE: 'import:browser:kill:complete'
        },
        RUNNING: 'import:browser:running'
      }
    }
  },
  STATUS: {
    SUCCESS: 'success',
    ERROR: 'error'
  },
  CHOOSE_PATH: 'openDirectory',
  CHOOSE_FILE: 'openFile',
  YES: 'YES',
  NO: 'NO',
  DIALOG_TYPES: {
    WARNING: 'warning'
  }
};
