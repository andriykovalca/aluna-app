
const data = require('./data');
const functions = require("./components/functions")
const fs = require('fs');

const newData = functions.storeReading(data.patients);

//Writing to file
fs.writeFile('./results.json', JSON.stringify(newData), err => {
    if (err) {
      console.error(err);
    }
    console.log('success!')
});