const locales = require('./locales')
const newWithdrawalEvent = require('./new-withdrawal-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = newWithdrawalEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}

