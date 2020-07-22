const Handlebars = require('handlebars')

const locales = require('./locales')
const approvedWithdrawalEvent = require('./approved-withdrawal-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(approvedWithdrawalEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
