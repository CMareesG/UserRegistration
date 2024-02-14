const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {
            type: "String",
            required: [true,"Please Enter the name"]
        },
        email:{
            type: "String",
            required: true,
        },
        password:{
            type: "String",
            required: true,
        },
        confirmpass:{
            type:"String",
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User",UserSchema);
module.exports = User;