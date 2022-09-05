const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const AccountModel = require('../models/account')

router.get('/', (req, res, next) => {
    AccountModel.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('server loi')
    })
})

router.get('/:id', (req, res, next) => {
    var id = req.params.id
    AccountModel.findById(id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('server loi')
    })
})

router.post('/', (req, res, next) => {

})
router.put('/:id', (req, res, next) => {
    var newPassword = req.body.new_password
    var id = req.params.id
    AccountModel.findByIdAndUpdate(id, {
        password : newPassword
    })
    .then(data => {
        res.json('update thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})
router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    AccountModel.deleteOne({
        _id: id
    })
    .then(data => {
        res.json('xoa thanh cong')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})

module.exports = router