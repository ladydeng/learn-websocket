const Websocket = require('ws')
const wss = new Websocket.Server({ port: 4000 })
let userList = []

wss.on('connection', function (ws) { // 有客户端连接进来
    ws.on('message', function (message) {
        console.log(JSON.parse(message.toString()).userId)
        // ws.send(message.toString())
        wss.clients.forEach(s => {
            s.send(message.toString())
        })
    })
    // ws.send('msg from server!')
    ws.on('close', function (message) {
        console.log('连接断开', message)
    })
})