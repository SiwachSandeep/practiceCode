
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello Siwach")
})

const PORT = 3003;
server.listen(PORT,()=>{
    console.log(`The Server Start At PORT ${PORT}`)
})