const Discord = require('discord.js');
const client = new Discord.Client();
const clientConfig = require('./internals/tokenfile.json');
const package = require('./package.json');
const messages = require('./internals/messages.json');
const lmao = require('./internals/channel.json');
client.on('ready', () => {
  console.log('#-----------------------------------------------------------------------------------------------------------------#')
  console.log('     ___  _______  ___  __    _          ___      _______  _______  __   __  _______     _______  _______  _______ ')
  console.log('    |   ||       ||   ||  |  | |        |   |    |       ||   _   ||  | |  ||       |   |  _    ||       ||       |')
  console.log('    |   ||   _   ||   ||   |_| |        |   |    |    ___||  |_|  ||  |_|  ||    ___|   | |_|   ||   _   ||_     _|')
  console.log('    |   ||  | |  ||   ||       |  ____  |   |    |   |___ |       ||       ||   |___    |       ||  | |  |  |   |  ')
  console.log(' ___|   ||  |_|  ||   ||  _    | |____| |   |___ |    ___||       ||       ||    ___|   |  _   | |  |_|  |  |   |  ')
  console.log('|       ||       ||   || | |   |        |       ||   |___ |   _   | |     | |   |___    | |_|   ||       |  |   |  ')
  console.log('|_______||_______||___||_|  |__|        |_______||_______||__| |__|  |___|  |_______|   |_______||_______|  |___|  ')
  console.log('By: zSnails#5755')
  console.log(`Version: ${package.version}`)
  console.log(`${client.user.tag} is ready`)
  console.log('#-----------------------------------------------------------------------------------------------------------------#')
});

client.on('guildMemberAdd', usr => {
  let msgchannel_2 = usr.guild.channels.find(channel => channel.id === lmao.channel_id)
  msgchannel_2.send(messages.join_1 + usr.user.tag + messages.join_2)
});
client.on('guildMemberRemove', usr => {
  let msgchannel_2 = usr.guild.channels.find(channel => channel.id === lmao.channel_id)
  msgchannel_2.send(usr.user.tag + messages.leave_1)
});

client.login(clientConfig.token)
