const Handlebars = require('handlebars')

const locales = require('./locales')
const orderFulfilled = require('./order-fulfilled.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderFulfilled.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
