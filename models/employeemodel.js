const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'this field is required.'
    },
    email: {
        type: String,
        required: 'this field is required'
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
   
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);
module.exports = EmployeeModel