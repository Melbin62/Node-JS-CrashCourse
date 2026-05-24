//const fs = require('fs');
//
//
//fs.readFile('./sample.txt','utf8',(errorData,Filecontent)=>{
//if(errorData){
// console.log(errorData,"This is the error data")
// }
// else{
// console.log(Filecontent,"This is the file content")
// }
//})
//
//
//
//fs.writeFile('./samplesecond.txt','puthiya content',(errorData)=>{
//if(errorData){
// console.log(errorData,"This is the error data")
// }
// else{
// console.log("File content added successfully")
// }
//})
//
//
//fs.unlink('./samplesecond.txt',(errorData)=>{
//if(errorData){
// console.log(errorData,"This is the error data")
// }
// else{
// console.log("File deleted successfully")
// }
//})
//
//fs.mkdir('./newfolder',(errorData)=>{
//if(errorData){
// console.log(errorData,"This is the error data")
// }
// else{
// console.log("Folder created successfully")
// }
//})


////os module
//
//const os = require('os')
//console.log(os.type())
//console.log(os.platform())
//console.log(os.totalmem())


//path module

//const path = require('path')
//const filename ='sample.txt'
//console.log(path.join(__dirname,filename),'file added successfully')
//
//console.log(path.dirname('home/melbin/Desktop/Node/sample.txt'),'file directory name')
//
//console.log(path.extname('home/melbin/Desktop/Node/sample.txt'),'file extension name')


//create server

const http = require('http')

const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/plai'})
res.end("This is the response from the server")

})
const port = 3000
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})