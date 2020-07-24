const locales = require('./locales')
const invitationEmail = require('./invitation-email')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = invitationEmail
  const expressions = locales[locale]

  return translate({ html, expressions })
}

