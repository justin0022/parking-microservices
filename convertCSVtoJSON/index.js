const csv = require('csvtojson')
const { join } = require('path')

csv()
  .fromFile(join(__dirname, './source/2018Parking_Tickets.csv'))
  .then(json => console.log(json))
