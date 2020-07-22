const Handlebars = require('handlebars')

const locales = require('./locales')
const cryptoDepositReceived = require('./crypto-deposit-received.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(cryptoDepositReceived.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
