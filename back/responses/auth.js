const crypto = require('crypto')
const user = require('./user.js')


module.exports = {
    login: {
        message: "Success Login",
        token: crypto.randomBytes(28).toString('hex'),
        user: user.user
    },
    login_error: {
        message: "Incorrect user or password."
    },
    register: {
        message: "Success Register",
        token: crypto.randomBytes(28).toString('hex'),
        user: user.user
    },
    register_error: {
        message: "Error with the register."
    },
}