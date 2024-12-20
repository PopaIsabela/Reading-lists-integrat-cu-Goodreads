const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

const Parent = mongoose.model('Parent', ParentSchema);

module.exports = Parent;
