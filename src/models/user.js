const mongoose = require('mongoose')

const User = mongoose.model('User', {
    Name:{
        type: String,
        required: true
    },
    EmailId:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    Password:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    DateOfBirth:{
        // DOB format - YYYY-MM-DD
        type: String,
        required: true,

        // To check if user is above 14 years
        validate(value){
            const today = new Date();
            const dob = new Date(value);
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            if(age < 14){
                throw new Error('Age should be above 14 years')
            }
        }
    }
})

module.exports = User