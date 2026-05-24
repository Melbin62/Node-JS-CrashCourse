const express = require('express');
const mongoose = require('mongoose');

//Create express app
const app = express();
const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/user-db';

//Middleware passing

app.use(express.json())

//Connect to MongoDB
mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

//Define schema
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true}
});

// Moder creation
const User = mongoose.model('User', userSchema,'userDetails');

//crud operations
//create
app.post('/users', async (req, res) => {
try{
const user = new User(req.body);
const insertData = await user.save();
res.status(200).json({
message:"User created successfully",
data:insertData})
}
catch{
res.status(400).json({
message:"Error creating user",
error:error.message})
}
})

//Read
app.get('/allusers', async (req, res) => {
try{
const users = await User.find();
res.status(200).json({
message:"All users retrieved successfully",
allusers:users})
}
catch{
res.status(400).json({
message:"User not found",
error:error.message})
}
})


//Update
app.put('/user/:id', async (req, res) => {
try{
const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).json({
message:"User updated successfully",
user:updatedUser})
}
catch{
res.status(400).json({
message:"User not found",
error:error.message})
}
})



//Delete

app.delete('/delete/:id', async (req, res) => {
try{
await User.findByIdAndDelete(req.params.id);
res.status(200).json({
message:"User deleted successfully"})
}
catch{
res.status(400).json({
message:"User not found",
error:error.message})
}
})




//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

