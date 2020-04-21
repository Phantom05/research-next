module.exports = {
  blogDetailGET: app => (req, res, next) => {
    const { blogNo } = req.params
    const page = '/blog/blogDetail'
    if (/^[0-9]*$/.test(blogNo)) {
      return app.render(req, res, page, { blogNo })
    }
    next()
  },
}
