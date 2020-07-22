const Handlebars = require('handlebars')

const locales = require('./locales')
const orderCanceled = require('./order-canceled.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(orderCanceled.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
