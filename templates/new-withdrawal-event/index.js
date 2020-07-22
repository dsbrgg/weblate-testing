const Handlebars = require('handlebars')

const locales = require('./locales')
const newWithdrawalEvent = require('./new-withdrawal-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(newWithdrawalEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
