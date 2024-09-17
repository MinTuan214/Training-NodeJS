module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(course => course.toObject());
    },
    mongoose: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}