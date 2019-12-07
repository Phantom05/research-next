// //server.js
// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({dev});
// const handle = app.getRequestHandler();

// app.prepare()
// .then(()=>{
//     const server = express();

//     server.get('/board/:title', (req, res) => {
//         const page = '/boardView';
//         const params = {title: req.params.title}
//         app.render(req, res, page, params)
//     });

//     server.get('*', (req, res) => {
//         return handle(req, res)
//     });

//     server.listen(8081, (err) => {
//         if(err) throw err;
//         console.log("> Ready on Server Port: 8081")
//     })
// })
// .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
// })

const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  createServer(handler)
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})