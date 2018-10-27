const csv = require('csvtojson')
const { writeFileSync } = require('fs')
const { join } = require('path')

const fileName = `2011Parking_Tickets.csv`

csv()
  .fromFile(join(__dirname, `./source/${fileName}`))
  .then(json => writeFileSync(join(__dirname, `./output/${fileName}.json`), JSON.stringify(json), 'utf8'))
