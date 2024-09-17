const Course = require('../models/Course');
const { mongoose } = require('../../util/mongoose');

class CourseController {
  show(req, res, next) {
      Course.findOne({slug: req.params.slug})
      .then(course =>{
          res.render('courses/show', {
            course: mongoose(course)
          })
      })
      .catch(next)

  }
  create(req, res, next){
      res.render('courses/create');
  }
  store(req, res, next){ 
      const course = new Course(req.body);
      course.save();
      res.redirect('/');
  }
  edit(req, res, next){
    Course.findById(req.params.id)
    .then(course => res.render('courses/edit', {
        course: mongoose(course)
    }))
    .catch(next)
  }
  update(req, res, next){ 
      Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/'))
      .catch(next)
  }
  
}

module.exports = new CourseController();
