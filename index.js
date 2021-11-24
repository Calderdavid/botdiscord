const { Client, Intents, MessageAttachment} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const Canvas = require('canvas');

require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const getRandom = () =>{
	return Math.random() * (100 - 0) + 0;
}

const getRandom2 = () =>{
	return parseInt(Math.random() * (3 - 0) + 0);
}


client.on('messageCreate', async msg => {

	const frase_1 = `Ah bueno hablo el italoveneco ${msg.author} 🇮🇹 🥱.`;
	const frase_2 = `Les aseguro que esa respuesta fue googleada ${msg.author} 🤨.`;
	const frase_3 = `Dejaste de jugar warzone... será porque eras muy manco ${msg.author}🤔?`;

	const list_frases = [frase_1, frase_2, frase_3];

	let num = getRandom();
	let num_2 = getRandom2();

//to kicked user
	if(msg.content === '!kick'){
		if(msg.member.hasPermission(["KICK_MEMBERS"])){
			console.log('entro');
			const member = msg.mentions.members.first();

			if(member){
				const kickedMember = await member.kick();
				console.log(kickedMember.user.username);
				msg.reply(`${kickedMember.user.username} has been kicked`);
			}
		}else{
			msg.reply("You don't have permission to this");
		}

	}

//CLASSES
	if(msg.content === '!ots') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912860947817832458/Captura_de_pantalla_53.png");
	
	if(msg.content === '!em2') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912861378648342548/Captura_de_pantalla_54.png");

	if(msg.content === '!mp5cw') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912861378941956156/Captura_de_pantalla_55.png");

	if(msg.content === '!xm4') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912861379206205480/Captura_de_pantalla_56.png");

	if(msg.content === '!bullfrog') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912862159761977414/Captura_de_pantalla_57.png");

	if(msg.content === '!milano') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912862160076554240/Captura_de_pantalla_58.png");

	if(msg.content === '!m4') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912862160361754624/Captura_de_pantalla_59.png");

	if(msg.content === '!kar98') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912862160630214696/Captura_de_pantalla_61.png");

	if(msg.content === '!mg82') msg.reply("https://cdn.discordapp.com/attachments/833544014363099176/912867962753540187/mg82-loadout-ranged.png");
//to delete 100 messages
	if(msg.content === "!deletemessages"){
		try{
			const fetched = await msg.channel.messages.fetch({limit: 100});
			msg.channel.bulkDelete(fetched);

		}catch(error){
			console.log(error);
		}


	}

	if (msg.content === 'hola' || msg.content === 'hello') {

		if(msg.author.username == 'Logan Kel'){
			msg.reply(`Mamalo otaku! ${msg.author}`)
		
		}else if(msg.author.username == 'Mausse') {
			msg.reply(`Ah bueno hablo el vato que decía que battlefield 2042 reemplazaría a cod 🤡`)
		
		}else{
			msg.reply(`Holaa ${msg.author}`);
		}
    }

	if (msg.author.username == 'Trollvision'){
		console.log(num);
		console.log(num_2);

		if(num <= 30) msg.reply(list_frases[num_2]);	
	}
});


client.login(process.env.DSTOKEN);



