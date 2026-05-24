const User = require('../model/user')
const jwt = require('jsonwebtoken')

const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists"})
        }

        const user = new User({name,email,password});
        await user.save();

        res.status(201).json({message:"User registered successfully",user})
    }
    catch(error){
        res.status(400).json({message:"Error registering user",error:error.message})
    }
}

const login = async (req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})
        }

        if(user.password !== password){
            return res.status(400).json({message:"Invalid email or password"})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});

        res.status(200).json({message:"Login successful",token})
    }
    catch(error){
        res.status(400).json({message:"Error logging in",error:error.message})
    }
}
module.exports = {register,login}