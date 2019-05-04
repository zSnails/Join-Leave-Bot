# How 2 use
First, you need to clone the project, make a folder in your pc and inside of it clone the project
```bash
$ git clone https://github.com/zSnails/join-leave-bot.git
```

# How 2 set-up in your server
Ok so this is the easiest part of all go to the `channel.json` file and paste your channel id there:


![Hey](https://i.imgur.com/6vOG8DP.png)

# How to make your own custom messages
This process is very simple, just go to `internals/messages.json`, and inside of the file you can edit the existing messages, or create new ones, json is a very simple languaje and you don need to know how to code to use it on this bot.

For example:

```json
{
  "note": "you can make your own messages here!",
  "join_1": "A new user has joined the server, ",
  "join_2": ", everyone, please say hi!",
  "leave_1": " left the server! They will be missed!"
}
```
This is how the file comes by default, but you can add new messages like this:

```json
{
  "note": "you can make your own messages here!",
  "join_1": "A new user has joined the server, ",
  "join_2": ", everyone, please say hi!",
  "leave_1": " left the server! They will be missed!",
  "join_3": "Someone joined..."
}
```
You don't need to call them `join_4, join_2, join_65`, etc, you can call them whatever you want, this is just to keep things clean, of course. you'll have to add them manually to your app.js file.

```js
client.on('guildMemberAdd', usr => {
  let msgchannel_2 = usr.guild.channels.find(channel => channel.id === lmao.channel_id)
  msgchannel_2.send(messages.join_1 + usr.user.tag + messages.join_2)
});
client.on('guildMemberRemove', usr => {
  let msgchannel_2 = usr.guild.channels.find(channel => channel.id === lmao.channel_id)
  msgchannel_2.send(usr.user.tag + messages.leave_1)
});
```
As you can see at the end of some lines there is something like this

```js
messages.join_1
```
you have to change that `join_1` to the key that you assigned to your custom message
```js
messages.join_3
```
But be careful, some messages have their own syntax, such as `join_1` and `join_2`
```js
msgchannel_2.send(messages.join_1 + usr.user.tag + messages.join_2)
```
You have to change the way that they appear in the code
```js
msgchannel_2.send(messages.join_3) //This will output Someone joined...
```
If you're unsure just don't touch anything, and you'll be fine


If you need help please join my discord server and I'll help you

> [Join](https://discord.gg/D6vjYyn) now!
