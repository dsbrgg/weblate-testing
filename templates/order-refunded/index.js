const Handlebars = require('handlebars')

const locales = require('./locales')
const orderRefunded = require('./order-refunded.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderRefunded.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
