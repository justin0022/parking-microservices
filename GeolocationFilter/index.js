const request = require('request-promise')
const { getTicketData, getGeoCodeFromStreetName } = require('./util')

const converStreetNameToGeoCode = async streetName => {
  const geoCode = await getGeoCodeFromStreetName(streetName)
    .then(x => x.Response.View[0].Result[0].Location.NavigationPosition[0])
    .then(({ Latitude, Longitude }) => ({ Latitude, Longitude }))

  return geoCode
}

module.exports = async function (context, { query }) {
  const lat = query.lat
  const long = query.long

  const ticketData = await getTicketData()

  const streetNames = ticketData.map(({ Block, Street }) => `${Block} ${Street}`)

  const geoCodes = await Promise.all(
    streetNames.slice(0, 10)
      .map(streetName => converStreetNameToGeoCode(streetName))
  )
  context.log(geoCodes)
}
