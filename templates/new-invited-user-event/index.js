const Handlebars = require('handlebars')

const locales = require('./locales')
const newInvitedUserEvent = require('./new-invited-user-event.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(newInvitedUserEvent.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
