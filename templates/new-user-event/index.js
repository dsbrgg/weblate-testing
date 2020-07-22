const Handlebars = require('handlebars')

const locales = require('./locales')
const newUserEvent = require('./new-user-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(newUserEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
