const Handlebars = require('handlebars')

const locales = require('./locales')
const manualTaskCompletion = require('./manual-task-completion.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(manualTaskCompletion.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
