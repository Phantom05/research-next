const blogDetailController = require('../controller/blogDetail.controller')
module.exports = (app, server) => {
  server.get('/blog/:blogNo', blogDetailController.blogDetailGET(app))
}
