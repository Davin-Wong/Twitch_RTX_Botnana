import tmi from 'tmi.js';

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'RTX_Botnana',
		password: 'oauth:owsk0b6lf0uae9uep3eeb3oitpawwq'
	},
	channels: [ 'Innocent_Fear' ]
});

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

function onMessageHandler (target, context, msg, self) {
	if (self) {
		return;
	}
	
	const commandName =  msg.trim();
	
	//BDO Commands
	if (commandName == '!gear') {
		client.say(target, `Updated as of 29/7/2020: https://imgur.com/a/UrkXxLF`)
		console.log(`* Executed ${commandName} command`)
	}

    //League Commands
	if (commandName == '!opgg') {
		client.say(target, `https://na.op.gg/multi/query=uaenabaehwa%2Crtxbanana%2Cenryu%2Cdyslexicivern`)
		console.log(`* Executed ${commandName} command`)
	}

    if (commandName == '!Uaena_Baehwa') {
		client.say(target, `I only really use this account for norms now because it has a lot of skins.`)
		console.log(`* Executed ${commandName} command`)
    }
    
    if (commandName == '!RTX_Banana') {
		client.say(target, `I use this account mainly for tryharding ranking, but occassionally I will use it for trolling around in norms.`)
		console.log(`* Executed ${commandName} command`)
	}

    //Social Commands
    if (commandName == '!discord') {
		client.say(target, `Join my discord for updates of when I go live! https://discord.gg/RSj8dK8`)
		console.log(`* Executed ${commandName} command`)
	}

	if (commandName == '!twitter') {
		client.say(target, `Thanks for the follow! https://twitter.com/RTX_Banana`)
		console.log(`* Executed ${commandName} command`)
	}

	if (commandName == '!help') {
		client.say(target, `HAHA I DIDNT IMPLEMENT THIS YET!`)
	}
}

function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}