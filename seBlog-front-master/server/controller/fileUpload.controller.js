const multiparty = require('multiparty')

module.exports = {

    fileUpload : async (req, res) => {
        const form = new multiparty.Form({
            uploadDir: 'uploadImageFile/', // 파일이 저장되는 경로(프로젝트 내의 temp 폴더에 저장됩니다.)
            maxFilesSize: 1024 * 1024 * 5  // 허용 파일 사이즈 최대치
        });

        form.parse(req, function (error, fields, files) {
            const path = files.file[0].path;
            res.send(path); // 파일과 예외 처리를 한 뒤 브라우저로 응답해준다.
        });

    },

}