const express = require('express');
const app = express();
const PORT = 3000;


function checkstudent(req, res, next) {
console.log("Checking Id")
next()
}

app.use('/login',checkstudent)

app.get('/',(req,res) => {
    res.send('<h1>Hello, World Login Page!</h1>');
})
app.get('/about', (req, res) => {
    res.send('<h1>Hello, World About Page!</h1>');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})