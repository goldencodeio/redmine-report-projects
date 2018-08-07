function processTimeSpend() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var rowI = 2;
  var columnI = 8;
  OPTIONS.identifiers.forEach(function(identifier) {
    if (!identifier) return ++rowI;
    var value = getTimeSpend(identifier);
    sheet.getRange(rowI, columnI).setValue(value);
    rowI++;
  });
}

function getTimeSpend(identifier) {
  var res = APIRequest('time_entries', {query: [
    {key: 'project_id', value: identifier}
  ]});

  return res.time_entries.reduce(function(a, c) {
    return a + c.hours;
  }, 0);
}
