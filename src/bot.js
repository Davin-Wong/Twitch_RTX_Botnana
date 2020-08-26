import tmi from 'tmi.js';
import dotenv from 'dotenv';

dotenv.config();

var bdoCommands = ["!bdomoney", " !gear"];
var leagueCommands = ["!opgg", " !rank"];
var commands = ["!discord", " !twitter", " !innocent_fear", " !pcbuild", " !playlist"];


const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'RTX_Botnana',
		password: process.env.OAUTH_TOKEN
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
	msg = msg.toLowerCase();
	const commandName =  msg.trim();
	
	//BDO Commands
	if (commandName == '!bdomoney') {
		client.say(target, `I don't really like sharing how I make money because there are so many ways 
			to make money in this game. If I did say it, it may become harder for me to make money. You 
			just have to figure out what works for you and not worry about optimizing everything.`);
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!gear') {
		client.say(target, `Updated as of 25/8/2020: https://imgur.com/a/eU0BOEk`);
		console.log(`* Executed ${commandName} command`);
	}

    //League Commands
	if (commandName == '!opgg') {
		client.say(target, `I used to have other accounts, but RTX Banana is the only account I 
			use now. Here is the opgg: https://na.op.gg/summoner/userName=RTX+Banana`);
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!rank') {
		client.say(target, `I don't really rank much in league. The current account I use is not my 
			old main. That account is a secret, but I don't really use it anymore. If you want to know what 
			rank I peaked at, I peaked gold 3 in season 9.`);
		console.log(`* Executed ${commandName} command`);
	}

    //Social and QoL Commands
    if (commandName == '!discord') {
		client.say(target, `Join my discord for updates of when I go live! https://discord.gg/RSj8dK8`);
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!twitter') {
		client.say(target, `Thanks for the follow! https://twitter.com/RTX_Banana`);
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!innocent_fear') {
		client.say(target, `Innocent Fear isn't that great? Well you're probably right. I may have mechanics 
			and decent game knowledge, but in terms of macro, I'm pretty bad.`);
		console.log(`* Executed ${commandName} command`);
	}
	/* For when I change twitch IGN
	 *	if (commandName == '!rtx_banana_origin') {
	 *		client.say(target, `I suck at coming up with names. One of my BDO friends said it when we were joking
	 *		around, and I liked it. So, I took on this name and it kind of stuck with me.`);
	 *		console.log(`* Executed ${commandName} command`);
	 *	}
	 */

	if (commandName == '!pcbuild') {
		client.say(target, 'pcpartpicker.com/list/gwn9XP');
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!playlist') {
		client.say(target, `Here is the playlist I usually use. My friend ryfy, aka cosiini, made it, so all 
			credit goes to him. https://open.spotify.com/playlist/6765iHhaesExkC36HjzNdR?si=cZ9IcKJkTAWWRX4pC1oimA`);
		console.log(`* Executed ${commandName} command`);
	}

	if (commandName == '!help') {
		client.say(target, `Bdo Specific Commands: ${bdoCommands}`);
		client.say(target, `League Specific Commands: ${leagueCommands}`);
		client.say(target, `Other Commands: ${commands}`);
		console.log(`* Executed ${commandName} command`);
	}
}

function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}

//Functions that execute on interval
function autoHelp() {
	client.say('#innocent_fear', `Type !help to see the commands available to this bot`);
	console.log(`* Executed auto help command`);
}

function discordPlug() {
	client.say('#innocent_fear', `Join my discord for updates of when I go live! https://discord.gg/RSj8dK8`);
	console.log(`* Executed discord command`);
}

function innocentfearCommandAuto() {
	client.say('#innocent_fear', `Innocent Fear isn't that great? Well you're probably right. I may have mechanics 
		and decent game knowledge, but in terms of macro, I'm pretty bad.`);
	console.log(`* Executed innocentfear command`);
}

setInterval(autoHelp, 300000);
setInterval(discordPlug, 900000);
setInterval(innocentfearCommandAuto, 1200000);
