const Handlebars = require('handlebars')

const locales = require('./locales')
const orderCreated = require('./order-created.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderCreated.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
