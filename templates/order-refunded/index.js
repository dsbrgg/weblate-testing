const locales = require('./locales')
const orderRefunded = require('./order-refunded')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = orderRefunded
  const expressions = locales[locale]

  return translate({ html, expressions })
}

