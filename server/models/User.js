const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

// schemas
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"]
    },
    email: {
        type: String,
        required: [true, 'email id is required'],
        unique: [true, 'email already used'],
        validate: [isEmail, "email is not valid"]
    },
    password: {
        type: String,
        required: [true, "password can't be empty"],
        minLength: [6, "password must be 6 characters minimum"]
    },
    dateStamp: {
        type: Date,
        default: Date.now
    }
})


const dataSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    other_details: {
        type: String,
        default: "None"
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// static methods
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw new Error("invalid password")
    }
    throw Error("invalid email")
}

dataSchema.statics.getDetails = async function (id) {
    const data = await this.find({ userID: id })
    return data;
}

// models
const User = mongoose.model('user', userSchema)
const UserData = mongoose.model('userdata', dataSchema)

module.exports = { User, UserData }