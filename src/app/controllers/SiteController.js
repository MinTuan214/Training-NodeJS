const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  index(req, res, next) {
    Course.find({})
    .then(courses => {
        res.render('home', { 
          courses: mutipleMongooseToObject(courses)
        });
    })
    .catch(next)
}
  detail(req, res) {
    res.render('detail');
  }
}

module.exports = new SiteController();
