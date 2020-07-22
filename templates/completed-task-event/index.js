const Handlebars = require('handlebars')

const locales = require('./locales')
const completedTaskEvent = require('./completed-task-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(completedTaskEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
