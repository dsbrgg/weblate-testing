const fs = require('fs')
const { promisify } = require('util')
const { minify } = require('html-minifier')

const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

;(async () => {
  const htmlDir = './html'
  const directory = await readDir(htmlDir)

  await Promise.all(
    directory.map(async file => {
      const [filename, extension] = file.split('.')

      if (extension === 'parsed') { return }

      const htmlPath = `${htmlDir}/${filename}.${extension}`
      const htmlParsedPath = `${htmlDir}/${filename}.parsed.${extension}`
      const htmlBuffer = await readFile(htmlPath)
      const html = minify(htmlBuffer.toString())

      await writeFile(htmlParsedPath, html)
    })
  )
})()
