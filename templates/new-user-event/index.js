const locales = require('./locales')
const newUserEvent = require('./new-user-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = newUserEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}

