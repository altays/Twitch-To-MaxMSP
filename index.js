const tmi = require('tmi.js');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const sendPort = 41234;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// UDP server 

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});
  
// Twitch bot

// Define configuration options
const opts = {
    identity: {
      username: process.env.BOT_USERNAME,
      password: process.env.OAUTH_TOKEN
    },
    channels: [
      process.env.CHANNEL_NAME
    ]
};
  
// Create a client with our options
const client = new tmi.client(opts);

function onMessageHandler (channel, tags, message, self) {
	if(self || !message.startsWith('!')) return;

	const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    
	if(command === 'echo') {

        let shortMessage = message.substring(6);
        console.log(shortMessage)

        server.send(shortMessage, sendPort, 'localhost', (err) => {
            // server.close();
        });
    }
    
    if(command === 'info') {
        client.say(channel, `This project utilizes TMIjs, Nodejs, and the sadam library of Max/MSP externals by Ádám Siska`);
	}
};

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler)
        
client.connect();