const express = require('express');
const router = express.Router();
const Child = require('../models/Child');


router.post('/', async (req, res) => {
    const child = new Child(req.body);
    try {
        await child.save();
        res.status(201).send(child);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/', async (req, res) => {
    try {
        const children = await Child.find();
        res.send(children);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
