module.exports = ({ html, expressions }) => Object.keys(expressions).reduce((template, expression) => template.replace(new RegExp(`{{${expression}}}`, 'g'), expressions[expression]), html)
