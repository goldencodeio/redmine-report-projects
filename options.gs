var OPTIONS = {};

function initOptions() {
  var _ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = _ss.getActiveSheet();

  OPTIONS[apiKey] = sheet.getRange(1, 1).getValue();
  OPTIONS[identifiers] = [];

  var data = sheet.getSheetValues(2, 1, -1, 1);
  data.forEach(function(row) {
    var identifier = row[0];
    OPTIONS.identifiers.push(identifier);
  });
  Logger.log(OPTIONS.identifiers);
}
