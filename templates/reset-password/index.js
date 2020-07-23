const locales = require('./locales')
const resetPassword = require('./reset-password')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = resetPassword
  const expressions = locales[locale]

  return translate({ html, expressions })
}
