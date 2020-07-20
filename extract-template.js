const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const createDir = promisify(fs.mkdir)

;(async () => {
  const psqlJson = './psql.json'
  const templatesPath = './templates'
  const templatesBuffer = await readFile(psqlJson)
  const templatesJson = JSON.parse(templatesBuffer.toString())

  await Promise.all(
    templatesJson.map(async ({ row_to_json }) => {
      const { code, html } = JSON.parse(row_to_json)

      const directory = `${templatesPath}/${code}`
      const localeDirectory = `${directory}/locales`
      const localeInitial = `${localeDirectory}/en.json`
      const templateFilename = `${directory}/template.json`
      const i18Filename = `${directory}/index.js`

      await createDir(directory)
      await createDir(localeDirectory)

      await writeFile(i18Filename, '')
      await writeFile(localeInitial, JSON.stringify({}, null, 2))
      await writeFile(templateFilename, JSON.stringify({ html }, null, 2))
    })
  )
})()
