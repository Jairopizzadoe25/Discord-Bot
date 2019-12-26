const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, Attachment } = require('discord.js')
const cheerio = require('cheerio');

const fs = require('fs');

const request = require('request');

const token = 'NjMyMzY0Njc4ODY5NDE4MDAw.XaKutw.dJOCG_k3NTVBFN-uVEiBTj7s_dM';

const PREFIX = '!';

var version = '1.3';


bot.on('ready', () => {
    console.log('This bot is online! ' + version);
    bot.user.setActivity('How to hide a body', { type: 'WATCHING'}).catch(console.error);

});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        case "baymax":

    let msgArgs = args.slice(1).join(" ");
    message.channel.send(msgArgs).then(() => {

        message.delete(0001).catch(console.error);


        
    });

break;  

}

});


 bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        case "poll":
            const Embed = new Discord.RichEmbed()
            .setColor(0xFFC300)
            .setTitle("🦘The Poll🦘")
            .setDescription("The Poll");

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
        
            let msgArgs = args.slice(1).join(" ");

            message.channel.send("👻 " + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(0010).catch(console.error);


                
            });

        break;  

    }

});

bot.on('message', msg=>{
    if(msg.content ===  "Baymax kys"){
        msg.reply('https://gph.is/2CINNZ0')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "Baymax go die"){
        msg.reply('https://gph.is/2CINNZ0')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "Baymax u bad"){
        msg.reply('https://gph.is/2CINNZ0')
    }
 })

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'mclovin':
            message.channel.sendMessage('https://tenor.com/vO6x.gif')
            break;
        case 'chicka':
            message.channel.sendMessage('https://tenor.com/8wal.gif')
            break;
        case 'gangsta':
            message.channel.sendMessage('https://tenor.com/w7nI.gif')

            
    }


    
})

bot.on('message', message => {
    if (message.content === 'Baymax u gay') {
     message.channel.sendMessage('For you homie');
    }
});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'curse':
        image(message);

        break;
    }

});

function image(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cursed image",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
  
 
        $ = cheerio.load(responseBody); 
 

        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
        console.log(urls);

        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 







}

bot.on('message', msg=>{
    if(msg.content ===  "Uh oh"){
        msg.reply('Stinky')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "uh oh"){
        msg.reply('Stinky')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "who`s joe"){
        msg.reply('Joe Momma')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "Who`s joe"){
        msg.reply('Joe Momma')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "Who's joe"){
        msg.reply('Joe Momma')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "who's joe"){
        msg.reply('Joe Momma')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "whos joe"){
        msg.reply('Joe Momma')
    }
 })

 bot.on('message', msg=>{
    if(msg.content ===  "Whos joe"){
        msg.reply('Joe Momma')
    }
 })



bot.on('message', message => {
 
    if (message.content === 'Disco') {
     
        const attachment = new Attachment('./Parrot.gif');
        
        message.channel.send(attachment);
    }
});

 bot.login(token);
