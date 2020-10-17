const tmi = require('tmi.js');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

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

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler)

function onMessageHandler (channel, tags, message, self) {
    // channel provides channel name
    // tags provides any flags on the user
    // message provides the message recieved
    // self
	if(self || !message.startsWith('!')) return;

	const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    
	if(command === 'echo') {
        // client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
        console.log(message)
	}
};

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
        
  
client.connect();