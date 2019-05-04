const Discord = require('discord.js');
const client = new Discord.Client();
const clientConfig = require('./internals/tokenfile.json')
const config = require('./config.json')
client.on('ready', () => {
console.log('  |_  |     (_)     | |                        | ___ \     | |  ')
console.log('    | | ___  _ _ __ | |     ___  __ ___   _____| |_/ / ___ | |_ ')
console.log('    | |/ _ \| | _ \| |    / _ \/ _` \ \ / / _ \ ___ \/ _ \| __|')
console.log('/\__/ / (_) | | | | | |___|  __/ (_| |\ V /  __/ |_/ / (_) | |_ ')
console.log('\____/ \___/|_|_| |_\_____/\___|\__,_| \_/ \___\____/ \___/ \__|')
});


//client.login(clientConfig.token)
console.log('     ___  _______  ___   __    _   ___      _______  _______  __   __  _______   _______  _______  _______ ')
console.log('    |   ||       ||   | |  |  | | |   |    |       ||   _   ||  | |  ||       | |  _    ||       ||       |')
console.log('    |   ||   _   ||   | |   |_| | |   |    |    ___||  |_|  ||  |_|  ||    ___| | |_|   ||   _   ||_     _|')
console.log('    |   ||  | |  ||   | |       | |   |    |   |___ |       ||       ||   |___  |       ||  | |  |  |   |  ')
console.log(' ___|   ||  |_|  ||   | |  _    | |   |___ |    ___||       ||       ||    ___| |  _   | |  |_|  |  |   |  ')
console.log('|       ||       ||   | | | |   | |       ||   |___ |   _   | |     | |   |___  | |_|   ||       |  |   |  ')
console.log('|_______||_______||___| |_|  |__| |_______||_______||__| |__|  |___|  |_______| |_______||_______|  |___|  ')
console.log("By zSnails")
console.log(`Version: ${config.version}`)
