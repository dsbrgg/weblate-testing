const Handlebars = require('handlebars')

const locales = require('./locales')
const { html } = require('./approve-email.json')

module.exports = ({ locale }) => {
  const template = Handlebars.compile(html)

  return template(locales[locale])
}
