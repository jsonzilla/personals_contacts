let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PersonSchema = new Schema({
    name: {
        type: String,
        required: 'Enter person name'
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'ContactSchema'
    }]
});

module.exports = mongoose.model('Person', PersonSchema);