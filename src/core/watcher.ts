import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'

import { appDir, getBoilerplate, getRouteSegment } from '../helpers/index.js'
import { FILES_ON_VIEW } from '../constants/index.js'

export function startWatcher() {
  console.log(' ')
  console.log(`🔍 Watching for new files in: ${appDir}`)
  console.log(' ')

  const watcher = chokidar.watch(appDir, {
    ignored: /(^|[/\\])\../,
    persistent: true,
    ignoreInitial: true,
    depth: 10,
  })

  watcher.on('add', (filePath) => {
    const fileName = path.basename(filePath)

    if (!FILES_ON_VIEW.includes(fileName)) return

    const content = fs.readFileSync(filePath, 'utf8').trim()
    if (content.length > 0) return

    const boilerplate = getBoilerplate(fileName, filePath)
    if (boilerplate) {
      fs.writeFileSync(filePath, boilerplate)
      console.log(' ')
      console.log(`✨ Route filled in: "${getRouteSegment(filePath)}"`)
      console.log(' ')
    }
  })
}
