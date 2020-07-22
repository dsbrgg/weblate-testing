const Handlebars = require('handlebars')

const locales = require('./locales')
const confirmationEmail = require('./confirmation-email.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(confirmationEmail.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
