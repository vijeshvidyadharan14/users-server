const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req, res) => {
    console.log("inside register controller");
    const { firstname, lastname, email, password, phonenumber} = req.body;
    console.log(firstname, lastname, email, password, phonenumber);

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(406).json("User Already Exist");
        } else{
            const newUser = new users ({
                firstname, lastname, email, password, phonenumber
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch (err){
        res.status(401).json(newUser)
    }
}

// login
exports.loginController = async (req,res) => {
    console.log('Inside Login Controller')
    const { email, password } = req.body
    console.log(email, password)

    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //token generate
            const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)          
            res.status(200).json({
                user : existingUser,
                token
            })
        }else{
            res.status(404).json("Invalid email/password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// get all-users 
exports .getUsersController = async (req, res) => {
    const userId = req.userId
    try{
        const allUsers = await users.find({userId}).select('-password')
        res.status(200).json(allUsers)
    } catch(err) {
        res.status(401).json(err)
    }
}

// get one-users 
exports .getOneUserController = async (req, res) => {
    const {email,password} = req.body
    console.log(email,password)
    try{
        const existingUser = await users.findOne({email}).select('-password')
        res.status(200).json(existingUser)
    } catch(err) {
        res.status(401).json(err)
    }
}

