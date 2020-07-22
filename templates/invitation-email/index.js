const Handlebars = require('handlebars')

const locales = require('./locales')
const invitationEmail = require('./invitation-email.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(invitationEmail.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
