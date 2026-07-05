const net = require('net')
const MessageFactory = require('./Protocol/MessageFactory')
const server = new net.Server()
const Messages = new MessageFactory()

const PORT = 9339

server.on('connection', async (socket) => {
  socket.setNoDelay(true)
  socket.log = function (text) {
    return console.log(`[${this.remoteAddress.split(':').slice(-1)}] >> ${text}`)
  }

  socket.log('A wild connection appeard!')
  
  const packets = Messages.getPackets();

  socket.on('data', async (data) => {
    const id = data.readUInt16BE(0)
    const len = data.readUIntBE(2, 3)
    const version = data.readUInt16BE(5)
    const payload = data.slice(7, 7 + len)

    if (packets.indexOf(String(id)) !== -1) {
      try {
        const packet = new (Messages.handle(id))(payload, socket)
        socket.log(`Gotcha ${id} (${packet.constructor.name}) packet!`)
        await packet.decode()
        await packet.process()
      } catch (e) {
        console.log(e)
      }
    } else {
      socket.log(`Gotcha undefined ${id} packet!`)
    }
  })

  socket.on('end', async () => {
    return socket.log('Client disconnected.')
  })

  socket.on('error', async error => {
    try {
      socket.log('A wild error!')
      console.log(error)
      socket.destroy()
    } catch (e) { }
  })
})

server.once('listening', () => console.log(`[SERVER] >> Server started on ${PORT} port!`))
server.listen(PORT)

process.on("uncaughtException", e => console.log(e));
process.on("unhandledRejection", e => console.log(e));
