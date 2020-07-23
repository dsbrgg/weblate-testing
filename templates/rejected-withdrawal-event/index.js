const locales = require('./locales')
const rejectedWithdrawalEvent = require('./rejected-withdrawal-event.json')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = rejectedWithdrawalEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}
