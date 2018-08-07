function calculateTimeSpend() {
  initOptions();
  processTimeSpend();
}

function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.addMenu('Redmine', [
    {name: 'Рассчитать трудозатраты', functionName: 'calculateTimeSpend'}
  ]);
}
