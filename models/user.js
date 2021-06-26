const { Mongoose } = require("mongoose");

const userSchema = Mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type : String,
        minlength: 5
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token: {
        type : String
    },
    token: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}