const User = require("../models/userModel");

const creates = async (req, res) => {
    let obj = req.body;
    let response = {}; // Create a single response object

    // Name validation
    if (obj.name !== "") {
        try {
            const data = await User.create(obj);
            response = {
                status: "success",
                msg: data
            };
        } catch (err) {
            response = {
                status: 'failed',
                msg: err
            };
            res.status(404);
        }
    } else {
        response = {
            status: "Failed",
            msg: "Name is required"
        };
        res.status(500);
    }

    // Email validation
    if (obj.email !== "" && (String(obj.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
        try {
            const data1 = await User.create(obj.email);
            response = {
                status: "Success",
                msg: data1
            };
        } catch (error) {
            response = {
                status: "failed",
                msg: error
            };
            res.status(404);
        }
    } else {
        response = {
            status: "failed",
            msg: "Invalid Email"
        };
        res.status(500);
    }

    // Password validation
    if (obj.password.length >= 8 && obj.password === obj.confirmpass&& /[A-Z]/.test(obj.password) && /[a-z]/.test(obj.password) && /\d/.test(obj.password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(obj.password)) {
        try {
            const data3 = await User.create(obj);
            response = {
                status: "Success",
                msg: data3
            };
        } catch (error) {
            response = {
                status: "failed",
                msg: error
            };
            res.status(404);
        }
    } else {
        response = {
            status: "Failed",
            msg: "Invalid Password"
        };
        res.status(500);
    }

    res.json(response); // Send the single response object
};

const fetch = async(req,res)=>{
    try{
        const user = await User.find({});
        res.status(200).json(user);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json(error.message);
    }
}

const del = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

module.exports = {creates,fetch,del}