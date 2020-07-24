const locales = require('./locales')
const orderPaid = require('./order-paid')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = orderPaid
  const expressions = locales[locale]

  return translate({ html, expressions })
}
