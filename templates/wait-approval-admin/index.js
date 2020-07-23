const locales = require('./locales')
const waitApprovalAdmin = require('./wait-approval-admin')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = waitApprovalAdmin
  const expressions = locales[locale]

  return translate({ html, expressions })
}
