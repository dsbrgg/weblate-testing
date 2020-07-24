const locales = require('./locales')
const confirmedDepositEvent = require('./confirmed-deposit-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = confirmedDepositEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}

