class NewsController {
  index(req, res) {
    res.render('news');
  }
  detail(req, res) {
    res.send('detail 1 2 3');
  }
}

module.exports = new NewsController();
