const locales = require('./locales')
const orderFulfilled = require('./order-fulfilled')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = orderFulfilled
  const expressions = locales[locale]

  return translate({ html, expressions })
}

