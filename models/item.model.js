const mongoose = require('moongoose');

var itemSchema  = new mongoose.Schema({
    id:{
        type: String
    },
    itemName:{
        type: String
    },
    color:{
        type: String
    }
});

mongoose.model('Item', itemSchema);