const Handlebars = require('handlebars')

const locales = require('./locales')
const orderPaid = require('./order-paid.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderPaid.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
