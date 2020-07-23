const Handlebars = require('handlebars')

const locales = require('./locales')
const orderPaidEvent = require('./order-paid-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderPaidEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
