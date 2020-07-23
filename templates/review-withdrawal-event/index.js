const locales = require('./locales')
const reviewWithdrawalEvent = require('./review-withdrawal-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = reviewWithdrawalEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}
