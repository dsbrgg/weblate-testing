const locales = require('./locales')
const completedTaskEvent = require('./completed-task-event')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = completedTaskEvent
  const expressions = locales[locale]

  return translate({ html, expressions })
}

