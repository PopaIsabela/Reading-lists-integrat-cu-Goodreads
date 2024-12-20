const express = require('express');
const router = express.Router();
const Parent = require('../models/Parent');


router.post('/', async (req, res) => {
    const parent = new Parent(req.body);
    try {
        await parent.save();
        res.status(201).send(parent);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/', async (req, res) => {
    try {
        const parents = await Parent.find();
        res.send(parents);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
