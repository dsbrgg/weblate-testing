const Handlebars = require('handlebars')

const locales = require('./locales')
const confirmedDepositEvent = require('./confirmed-deposit-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(confirmedDepositEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
