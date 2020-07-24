module.exports = ({ html, expressions }) => {
  let template = html

  for(const expression in expressions) {
    const value = expressions[expression]
    const regex = new RegExp(`{{${expression}}}`, 'g')

    template = template.replace(regex, value)
  }

  return template
}
