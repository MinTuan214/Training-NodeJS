class CategoriesController {
  index(req, res) {
    res.render('category');
  }
}

module.exports = new CategoriesController();
