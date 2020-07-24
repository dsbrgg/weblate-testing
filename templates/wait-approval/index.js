const locales = require('./locales')
const waitApproval = require('./wait-approval')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = waitApproval
  const expressions = locales[locale]

  return translate({ html, expressions })
}
