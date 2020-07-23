const locales = require('./locales')
const orderCreated = require('./order-created.json')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = orderCreated
  const expressions = locales[locale]

  return translate({ html, expressions })
}
