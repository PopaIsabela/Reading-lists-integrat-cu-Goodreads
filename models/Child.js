const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
    name: { type: String, required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }
});

const Child = mongoose.model('Child', ChildSchema);

module.exports = Child;
