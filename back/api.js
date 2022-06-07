const express = require('express')

const auth = require('./responses/auth.js')
const user = require('./responses/user.js')

const bp = require('body-parser')
var cors = require('cors')

const app = express()
const port = 5555
const crypto = require('crypto')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(cors())


/**
 * Login
 */
app.post('/api/auth/login', (req, res) => {
    setTimeout(() => {
        let email = req.body.email;
        let password = req.body.password;
        email === 'info@siriondev.com' && password === 'Sirion+2016' ?
            res.status(200).send(auth.login) :
            res.status(401).send(auth.login_error);
    }, 2000)
});

/**
 * Registre
 */
app.post('/register', (req, res) => {
    setTimeout(() => {
        let email = req.body.email;
        let password = req.body.password;
        let password_confirmation = req.body.password_confirmation;

        if ((email && password && password_confirmation) && (password === password_confirmation)) {
            res.status(200).send(auth.register)
        }

        res.status(404).send(auth.register_error);
    }, 2000)
});

/**
 * Get User
 */
app.get('/api/auth/user', (req, res) => {
    setTimeout(() => {
        req.headers.authorization ?
            res.status(200).send(user.user) :
            res.status(401).send(user.user_error)
    }, 1000)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
