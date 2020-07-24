const locales = require('./locales')
const cryptoDepositReceived = require('./crypto-deposit-received')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = cryptoDepositReceived
  const expressions = locales[locale]

  return translate({ html, expressions })
}

