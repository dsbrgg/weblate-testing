const Handlebars = require('handlebars')

const locales = require('./locales')
const approveEmail = require('./approve-email.json')

module.exports = ({ locale, options = {} }) => {
  const template = Handlebars.compile(approveEmail.html, options)
  const expressions = locales[locale]

  return template(expressions)
}
