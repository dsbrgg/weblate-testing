const locales = require('./locales')
const newInvitedUserEvent = require('./new-invited-user-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = newInvitedUserEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}

