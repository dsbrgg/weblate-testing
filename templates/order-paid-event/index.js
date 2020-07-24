const locales = require('./locales')
const orderPaidEvent = require('./order-paid-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = orderPaidEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}
