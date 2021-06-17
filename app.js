const { loadNuxt, build } = require('nuxt')
const express = require('express')
const fs = require('fs')

const app = express()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000


async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.use(express.static('./static'))
  
  app.get('/test-ping', (req, res) => {
    const files = fs.readdirSync("./")
    res.send('test pong\n' + JSON.stringify(files))
  })

  app.use(nuxt.render)

  if (isDev) {
    build(nuxt)
  }

  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
