const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please provide a username'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    address: {
        type: Array,

    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
    },
    usertype: {
        type: String,
        required: [true, 'Please provide a user type'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: "https://www.flaticon.com/free-icon/user_149071"
    },
    answer:{
        type: String,
        required: [true, 'Please provide an answer'],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);