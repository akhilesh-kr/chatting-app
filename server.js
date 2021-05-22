const http=require('http')
const express=require('express')
const app=express()
const socketio=require('socket.io')

const server=http.createServer(app)
const io=socketio(server)

io.on('connection',(socket)=>{
    console.log('connected with socket id=',socket.id)
})

socket.on('msg_send',(data)=>{
    console.log('recieved',data.msg)
})

app.use('/',express.static(__dirname +'/public'))

app.listen(3000,()=>{
    console.log("server is running at https://localhost:3000")
})