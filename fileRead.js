const fs = require('node:fs');
fs.readFile('file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }
  // no errors, process data
  console.log(JSON.parse(data));
});