const locales = require('./locales')
const confirmationEmail = require('./confirmation-email')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = confirmationEmail
  const expressions = locales[locale]

  return translate({ html, expressions })
}

