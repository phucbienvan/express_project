const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
var router = express.Router()
const AccountModel = require('../models/account')


router.get('/', (req, res) => {
    res.json("this is router ")
})

router.post('/register', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username : username
    })
    .then(data => {
        if (data) {
            res.json('tai khoan da ton tai')
        } else {
            return AccountModel.create({
                username : username,
                password : password
            })
        }
    })
    .then(data => {
        res.json(data)
      })
    .catch(err => {
      res.status(500).json({
          message : 'co loi xay ra',
          code : 400
      })
    })
})

router.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password
    })
    .then(data => {
        if (data) {
            res.json({
                message : 'dang nhap thanh cong',
                code : 200
            })
        } else {
            res.status(400).json({
                code : 400,
                message: 'dang nhap that bai'
            })
        }
    })
    .catch(err => {
        res.json('co loi xay ra')
    })
})

module.exports = router
