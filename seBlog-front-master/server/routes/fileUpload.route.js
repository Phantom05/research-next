const fileUploadController = require('../controller/fileUpload.controller')
module.exports = server => {
    server.post('/fileUpload',fileUploadController.fileUpload)
}