const locales = require('./locales')
const manualTaskCompletion = require('./manual-task-completion')
const translate = require('../utils/translate')

module.exports = ({ locale, options = {} }) => {
  const { html } = manualTaskCompletion
  const expressions = locales[locale]

  return translate({ html, expressions })
}

