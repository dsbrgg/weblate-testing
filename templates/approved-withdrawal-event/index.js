const locales = require('./locales')
const approvedWithdrawalEvent = require('./approved-withdrawal-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = approvedWithdrawalEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}


