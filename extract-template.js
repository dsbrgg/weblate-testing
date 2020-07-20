const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const createDir = promisify(fs.mkdir)

;(async () => {
  const localesPath = './locales'
  const templatesPath = './templates.json'
  const templatesBuffer = await readFile(templatesPath)
  const templatesJson = JSON.parse(templatesBuffer.toString())
  const html =

  await Promise.all(
    templatesJson.map(async ({ row_to_json }) => {
      const row = JSON.parse(row_to_json)
      const directory = `${localesPath}/${row.code}`
      const filename = `${directory}/en.html`

      await createDir(directory)
      await writeFile(filename, row.html)
    }, {})
  )
})()
