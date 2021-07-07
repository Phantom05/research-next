const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
})
const handle = app.getRequestHandler()
const proxy = require('http-proxy-middleware')
require('dotenv').config()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use('/api', proxy({ target: process.env.SERVER_URI, changeOrigin: true }))
    
    server.use('/upload', express.static('uploadImageFile'))
    server.use('/static', express.static('static'))

    // Server Routing
    require('./server/routes/fileUpload.route')(server)
    require('./server/routes/blogDetail.route')(app, server)

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw new Error(err)
      console.log('Server Started!!')
    })
  })
  .catch(err => {
    console.log(err.stack)
  })
