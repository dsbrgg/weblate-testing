const locales = require('./locales')
const approveEmail = require('./approve-email')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = approveEmail
  const expressions = locales[locale]

  return translate({ html, expressions })
}

