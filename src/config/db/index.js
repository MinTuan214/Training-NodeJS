const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/education');
        
        console.log('Successfully');
        
    } catch (error) {
        console.log('Fail');     
    }
}

module.exports = { connect };