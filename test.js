const faker = require('faker');
const mongoose = require('mongoose')
const User = mongoose.model('User')
const date1 = new Date("2019/1/1")
const date2 = new Date("2019/12/31")
const startTime = Date.now()
const express = require('express')
const router = express.Router()

router.get('/faker', async function (req, res) {
    try {
        var data = await User.find({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


router.post('/faker', async function (req, res) {
    try {
        let newUser = new User({
            user_name: faker.name.lastName(),
            city: faker.address.city(),
            email: faker.internet.email(),
            country: faker.address.country(),
            age: faker.random.number(100),
            creat_at: faker.date.between(date1, date2)
        })
        var data = await newUser.save()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/faker', async function (req, res) {
    try {
        await User.findOneAndRemove({
            name: req.body.text
        })
        res.send('Removed')
    } catch (error) {
        res.send(error)
    }
})

router.put('/faker', async function (req, res) {
    try {
        var data = await User.findOneAndUpdate({
            name: req.body.text
        }, req.body, {
            new: true
        })
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
async function auto_insert(a) {
    let index = 0
    let newUser = new User({
        user_name: faker.name.lastName(),
        city: faker.address.city(),
        email: faker.internet.email(),
        country: faker.address.country(),
        age: faker.random.number(100),
        creat_at: faker.date.between(date1, date2)
    })
    await newUser.save();

    if (index < a) {
        process.nextTick(auto_insert, index + 1);
        index += 1
    } else {
        console.log(Date.now() - startTime)
    }
}
// auto_insert(1000000)
