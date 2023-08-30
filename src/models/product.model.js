const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    code:{
        type: String,
        required: true,
        
    },
    name:{
        type:String,
        required:true,
        minLength:10,
        maxLength:255
    },
    data:{
        type: Date,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    quantity:{
        type: Number,
        min: 0,
        required: true
    },
    storecode:{
        type: String,
        required: true
    },
    
    
});
module.exports = mongoose.model("Product",product_schema);