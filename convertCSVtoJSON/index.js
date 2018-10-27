const csv = require('csvtojson')
const { writeFileSync } = require('fs')
const { join } = require('path')
require('dotenv').config()
const mongoClient = require('mongodb').MongoClient

// const fileName = `2011Parking_Tickets.csv`

// csv()
//   .fromFile(join(__dirname, `./source/${fileName}`))
//   .then(json => writeFileSync(join(__dirname, `./output/${fileName}.json`), JSON.stringify(json), 'utf8'))
const url = encodeURIComponent(process.env.PASSWORD)

mongoClient.connect(`mongodb://covparkingticket:${url}@covparkingticket.documents.azure.com:10255/?ssl=true`, (err, db) => {
  db.
})
