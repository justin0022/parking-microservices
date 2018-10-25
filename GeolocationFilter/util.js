const request = require('request-promise')

const getTicketData = async () => request('https://covapi.azurewebsites.net/api/parkingtickets')
  .then(x => JSON.parse(x))

const getGeoCodeFromStreetName = streetName => {
  const APPID = process.env['APPID']
  const APPCODE = process.env['APPCODE']

  return request(`https://geocoder.api.here.com/6.2/geocode.json?app_id=${APPID}&app_code=${APPCODE}&searchtext=${streetName}&country=Canada&city=Vancouver`)
    .then(res => JSON.parse(res))
}

module.exports = {
  getTicketData,
  getGeoCodeFromStreetName
}
