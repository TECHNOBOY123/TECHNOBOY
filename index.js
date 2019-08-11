const Discord = require('discord.js');
const client = new Discord.Client();

const moment = require('moment');
require('moment-duration-format');
moment.locale('fr');
const fs = require('fs')
var interserverCooldown = new Set();
var request = require('request');

const blacklist = JSON.parse(fs.readFileSync("./json/blacklist.json", "utf8"));

var jeuxs = [
    `t/help`, 
    `By TECHNOBOY`, 
    `t/infos`, 
    `t/support`,
    `Faite t/dons`,
    `prefix t/`];
    setInterval(function(){
    var jeux = jeuxs[Math.floor(Math.random()*jeuxs.length)];
    client.user.setPresence({ 
    game:{ 
    name: jeux, 
    type: 0
    } 
    });
    }, 10000);

var prefix = "t/";

const warns = JSON.parse(fs.readFileSync('./warns.json'))

const inter = JSON.parse(fs.readFileSync("./json/inter.json"))

client.login('NjAyNTg4MTgxNTI2NzQxMDAy.XTsptA.sOIaP-H0ioP5Osfg0m6ZcEXQmGc');

client.on('message', message => {
    if (message.content === prefix + 'helpmp') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("<a:valider:607208649286483988> **Message envoyé !**")
            .setDescription("**Vérifiez vos mp (message privé)**" + "\n" + "**Les pages de help vous ont été attribué en message privé !**")
        message.channel.send(embed).then(message => message.delete(5000));
    }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "helpmp")){
        if(blacklist[message.author.id]){
            }
        message.delete();
        message.author.send("", {
        embed: {
        color: 0x00AAFF,
        author: message.author.name,
        title: '**__Voici les commandes de TECHNOBOT__**',
        description: 'Il y a au total **__56__** commandes.',
        fields: [ 
        {  
        name: '<a:lowding2:603917000397422594>Modérations (*21*)',
        value: "```fix" + "\n" + "miseajoure;" + "\n" + "kick," + "\n" + "ban," + "\n" + "clear," + "\n" + "mute," + "\n" + "unmute," + "\n" + "warn," + "\n" + "unwarn," + "\n" + "infractions," + "\n" + "punition," + "\n" + "bl," + "\n" + "unbl," + "\n" + "verify," + "\n" + "checkid," + "\n" + "reset," + "\n" + "giveway," + "\n" + "winner," + "\n" + "hgiveway," + "\n" + "annonce," + "\n" + "sondage," + "\n" + "off." + "\n" + "```",
        inline: true   
        }, {
        name: '<a:lowding2:603917000397422594>Plus (*27*)',
        value: "```fix" + "\n" + "serveur," + "\n" + "myID," + "\n" + "IDserver" + "\n" + "IDchannel" + "\n" + "IDowner," + "\n" + "owner," + "\n" + "avatar," + "\n" + "dons," + "\n" + "ytb," + "\n" + "support," + "\n" + "invite," + "\n" + "ping," + "\n" + "support," + "\n" + "infos," + "\n" + "userinfos," + "\n" + "serverinfos," + "\n" + "uptime," + "\n" + "siteweb," + "\n" + "say," + "\n" + "report," + "\n" + "compte-a-rebour," + "\n" + "creatChannel," + "\n" + "channel-log," + "\n" + "ArAna" + "\n" + "help-inter-server," + "\n" + "help-log," + "\n" + "help-staff." + "\n" + "```",
        inline: true
        }, {    
        name: '<a:lowding2:603917000397422594>Jeux (*8*)',
        value: "```fix" + "\n" + "anime," + "\n" + "banane," + "\n" + "dé," + "\n" + "rip," + "\n" + "roulette," + "\n" + "smoke," + "\n" + "setup," + "\n" + "8ball." + "\n" + "```",
        inline: true
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        timestamp: new Date(),
        footer: {
        text: '©Bot By TECHNOBOY • 56 commandes',
    }}});
    }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "helpici")){
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();
        message.channel.send("", {
        embed: {
        color: 0x00AAFF,
        author: message.author.name,
        title: '**__Voici les commandes de TECHNOBOT__**',
        description: 'Il y a au total **__56__** commandes.',
        fields: [ 
        {  
        name: '<a:lowding2:603917000397422594>Modérations (*21*)',
        value: "```fix" + "\n" + "miseajoure;" + "\n" + "kick," + "\n" + "ban," + "\n" + "clear," + "\n" + "mute," + "\n" + "unmute," + "\n" + "warn," + "\n" + "unwarn," + "\n" + "infractions," + "\n" + "punition," + "\n" + "bl," + "\n" + "unbl," + "\n" + "verify," + "\n" + "checkid," + "\n" + "reset," + "\n" + "giveway," + "\n" + "winner," + "\n" + "hgiveway," + "\n" + "annonce," + "\n" + "sondage," + "\n" + "off." + "\n" + "```",
        inline: true   
        }, {
        name: '<a:lowding2:603917000397422594>Plus (*27*)',
        value: "```fix" + "\n" + "serveur," + "\n" + "myID," + "\n" + "IDserver" + "\n" + "IDchannel" + "\n" + "IDowner," + "\n" + "owner," + "\n" + "avatar," + "\n" + "dons," + "\n" + "ytb," + "\n" + "support," + "\n" + "invite," + "\n" + "ping," + "\n" + "support," + "\n" + "infos," + "\n" + "userinfos," + "\n" + "serverinfos," + "\n" + "uptime," + "\n" + "siteweb," + "\n" + "say," + "\n" + "report," + "\n" + "compte-a-rebour," + "\n" + "creatChannel," + "\n" + "channel-log," + "\n" + "ArAna" + "\n" + "help-inter-server," + "\n" + "help-log," + "\n" + "help-staff." + "\n" + "```",
        inline: true
        }, {    
        name: '<a:lowding2:603917000397422594>Jeux (*8*)',
        value: "```fix" + "\n" + "anime," + "\n" + "banane," + "\n" + "dé," + "\n" + "rip," + "\n" + "roulette," + "\n" + "smoke," + "\n" + "setup," + "\n" + "8ball." + "\n" + "```",
        inline: true
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        timestamp: new Date(),
        footer: {
        text: '©Bot By TECHNOBOY • 56 commandes',
    }}});
    }
});

client.on('message', message => {
    if (message.content === prefix + 'help') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("<a:valider:607208649286483988> **Demande pris en compte  !**")
            .setDescription("**Veuillez choisir ou vous voulez la page de help**" + "\n" + "**__t/helpmp =__ message privée**" + "\n" + "**__t/helpici =__ dans le salons ou vous tappez la commande**")
        message.channel.send(embed).then(message => message.delete(8000));
    }
});

client.on('message', message => {
    if (message.content === prefix + 'help-staff') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("<:warning:603917749764358155> **__Ces commandes sont or de votre porter, seul le staff peut l'utiliser !__** <:warning:603917749764358155>")
            .addField("*Vous ne pouvez pas faire ces commandes seulement si votre id est inscrit dans le code !*", "```diff" + "\n" + "- t/reset = pour redémarrer le bot" + "\n" + "- t/off = pour éttaindre le bot" + "\n" + "- t/bl = pour black liste un utilisateur/bot" + "\n" + "- t/unbl = pour enlever un utilisateur/bot de la black liste" + "\n"  + "- t/punition = pour interdire l'inter-serveur" + "\n" + "- t/miseajoure = mettre ajour le bot" + "\n" + "```" + "\n"  + "\n" + "Demandé par " + "@" +message.author.tag)
        message.author.send(embed)
    }
});

client.on("guildCreate", guild => {

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Un serveur m'as ajouté !__**")
    .setDescription('__Ajoute sur un serveur.__')
    .addField("**__Fondateur :__**" , guild.owner.user.tag, true)
    .addField("**__Id du serveur :__**", guild.id, true)
    .addField("**__Id du fondateur :__**", guild.owner.id, true)
    .addField("**__Serveur :__**", guild.name, true)
    .addField("**__Nombre de membre :__**", guild.memberCount, true)
    .setTimestamp()
    .setFooter("TECHNOBOT créer part TECHNOBOY")
    .setThumbnail()
    client.guilds.get('596020968707850240').channels.get('609407171788144661').send(embed)
}

);

client.on("guildDelete", guild => {

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Un serveur m'as enlevé !__**")
    .setDescription('__Retrait sur un serveur.__')
    .addField("**__Fondateur :__**" , guild.owner.user.tag, true)
    .addField("**__Id du serveur :__**", guild.id, true)
    .addField("**__Id du fondateur :__**", guild.owner.id, true)
    .addField("**__Serveur :__**", guild.name, true)
    .addField("**__Nombre de membre :__**", guild.memberCount, true)
    .setTimestamp()
    .setFooter("TECHNOBOT créer part TECHNOBOY")
    .setThumbnail()
    client.guilds.get('596020968707850240').channels.get('609407171788144661').send(embed)
}

);

client.on('message', message => {
    if (message.content === prefix + 'help-staff') {
        if(blacklist[message.author.id]){
            }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("<a:valider:607208649286483988> **Message envoyé !**")
            .setDescription("**Vérifiez vos mp (message privé)**" + "\n" + "**La page de help vous a été envoyé en message privé !**")
        message.channel.send(embed).then(message => message.delete(5000));
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'banane'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["-| :banana: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :banana: |-", "-| :lemon: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :tangerine: |-", "-| :tangerine: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :banana: |-", "-| :banana: |-" + "\n" + "-| :banana: |- **GG, tu a gagner la partie !**" + "\n" + "-| :banana: |-", "-| :banana: |-" + "\n" + "-| :kiwi: |-" + "\n" + "-| :lollipop: |-","-| :doughnut: |-" + "\n" + "-| :beer: |-" + "\n" + "-| :birthday: |-","-| :green_apple: |-" + "\n" + "-| :green_apple: |-" + "\n" + "-| :beer: |-","-| :birthday: |-" + "\n" + "-| :green_apple: |-" + "\n" + "-|  :doughnut: |-"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setTitle(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'myID') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("<a:valider:607208649286483988> **Message envoyé !**")
            .setDescription("**Vérifiez vos mp (message privé)**" + "\n" + "**Votre ID vous a été envoyé en message privé !**")
        message.channel.send(embed).then(message => message.delete(5000));
    }
});

client.on('message', message => {
    if (message.content === prefix + 'off') {
        message.delete();
        if(message.author.id !== "574544938440851466") return message.channel.send("<a:NON:603917166818885682> Vous êtes qui pour vouloir m'éttaindre ?")
        
        message.channel.send('**Je vais m\'éttaindre**').then(msg => {
            setTimeout(() => {
                msg.edit(':radio_button: ')
            },1000);
            setTimeout(() => {
                msg.edit(':radio_button: :radio_button: ')
            },2000);
            setTimeout(() => {
                msg.edit(':radio_button: :radio_button: :radio_button: ')
            },3000);
            setTimeout(() => {
                msg.edit(':radio_button: ')
            },4000);
            setTimeout(() => {
                msg.edit(':radio_button: :radio_button: ')
            },5000);
            setTimeout(() => {
                msg.edit(':radio_button: :radio_button: :radio_button: ')
            },6000);
            setTimeout(() => {
                msg.edit('**Je sui off.**')
            },7000);
            console.log(`${message.author.tag} [ ${message.author.id} ] a étaint le bot TECNOBOT.`);
            setTimeout(() => {
                client.destroy()
            },10000);
        })
    }
});

client.on('message', message => {
    if (message.content === prefix + "reset") {
        message.delete();
        if(message.author.id !== "574544938440851466") return message.channel.send("<a:NON:603917166818885682> Vous êtes qui pour vouloir me redémarer ?")
        message.channel.send('**Redémarrage**').then(msg => {
            setTimeout(() => {
                msg.edit('**[▇] 2%**');
            },1000);
            setTimeout(() => {
                msg.edit('**[▇▇] 5%**' + '\n' + 'veuillez passientez.')
            },3000);
            setTimeout(() => {
                msg.edit('**[▇▇▇] 15%**'+ '\n' + 'veuillez passientez..')
            },5000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇] 20%**'+ '\n' + 'veuillez passientez...')
            },7000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇] 25%**'+ '\n' + 'veuillez passientez.')
            },9000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇] 30%**'+ '\n' + 'veuillez passientez..')
            },11000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇] 35%**'+ '\n' + 'veuillez passientez...')
            },13000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇] 40%**'+ '\n' + 'veuillez passientez.')
            },15000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇] 45%**'+ '\n' + 'veuillez passientez..')
            },17000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇] 50%**'+ '\n' + 'veuillez passientez...')
            },19000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇] 55%**'+ '\n' + 'veuillez passientez.')
            },21000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇] 60%**'+ '\n' + 'veuillez passientez..')
            },23000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇] 65%**'+ '\n' + 'veuillez passientez...')
            },25000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 70%**'+ '\n' + 'veuillez passientez.')
            },27000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 75%**'+ '\n' + 'veuillez passientez..')
            },29000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 80%**'+ '\n' + 'veuillez passientez...')
            },31000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 85%**'+ '\n' + 'veuillez passientez.')
            },33000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 90%**'+ '\n' + 'veuillez passientez..')
            },35000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 95%**'+ '\n' + 'veuillez passientez...')
            },37000);
            setTimeout(() => {
                msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 100%**<a:explosion:485070538977574943>'+ '\n' + 'Le téléchargement à pris fin, le bot va redémarrer !')
            },39000);
            console.log(`${message.author.tag} [ ${message.author.id} ] a redémarré le bot TECNOBOT.`);
            console.log(`Redémarrage..`);
            setTimeout(() => {
                client.destroy();
                client.login("NjAyNTg4MTgxNTI2NzQxMDAy.XTsptA.sOIaP-H0ioP5Osfg0m6ZcEXQmGc");
            },41000);
            setTimeout(() => {
                msg.edit('**opération redémarrage reussis avec succès...<a:valider:607208649286483988>**');
            },42000);
            })
    }
});

client.on('message', message => {
    if (message.content === prefix + "smoke") {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
        message.channel.send('**Je m\'allume une clope**').then(msg => {
            setTimeout(() => {
                msg.edit('');
            },1000);
            setTimeout(() => {
                msg.edit(':smoking:')
            },3000);
            setTimeout(() => {
                msg.edit(':smoking: :cloud:')
            },5000);
            setTimeout(() => {
                msg.edit(':smoking:')
            },6000);
            setTimeout(() => {
                msg.edit(':smoking: :cloud:')
            },7000);
            setTimeout(() => {
                msg.edit(':smoking: :cloud: :cloud:')
            },8000);
            setTimeout(() => {
                msg.edit(':smoking: :cloud:')
            },9000);
            setTimeout(() => {
                msg.edit(':smoking:')
            },10000);
            setTimeout(() => {
                msg.edit('**Je l\'ai fini**')
            },11000);
            })
    }
});

client.on('message', message => {
    if (message.content === prefix + "compte-a-rebour") {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
        message.channel.send('**Le compte à rebour vas commencer !!**').then(msg => {
            setTimeout(() => {
                msg.edit('**10**');
            },1000);
            setTimeout(() => {
                msg.edit('**9**')
            },3000);
            setTimeout(() => {
                msg.edit('**8**')
            },5000);
            setTimeout(() => {
                msg.edit('**7**')
            },7000);
            setTimeout(() => {
                msg.edit('**6**')
            },9000);
            setTimeout(() => {
                msg.edit('**5**')
            },11000);
            setTimeout(() => {
                msg.edit('**4**')
            },13000);
            setTimeout(() => {
                msg.edit('**3**')
            },15000);
            setTimeout(() => {
                msg.edit('**2**')
            },17000);
            setTimeout(() => {
                msg.edit('**1**')
            },19000);
            setTimeout(() => {
                msg.edit('**0**')
            },21000);
            })
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "creatChannel")) {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({
          embed: {
              color: 0x9400d3,
              description: `<@${message.author.id}> **Vous avez pas la perm gèrer les roles !**`
          }
      });
      let aicon = message.author.displayAvatarURL;
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("**Le salon vient d'être crèe !**")
      .setTimestamp()
      .setFooter("salon crèe", aicon)
      .addField("salon crèe par", `<@${message.author.id}>`);
      
      
      message.guild.createChannel("Channel");
      message.channel.send(embed);
      }
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:", "Je sais pas...", "Prout", "<a:NON:603917166818885682>"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RABDOM")
            .setTitle(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'anime'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/607180536208818176/anim1.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180538683588619/anim4.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180539077722112/anim3.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180570878803969/anim5.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180570878803969/anim5.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180617624322058/anim2.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180697664356362/anim6.gif"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setImage(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'setup'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/607191416254496788/images_1.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191421480468481/images_2.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191424630521856/images.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191454326063105/Ways-to-Upgrade-Your-PC-Gaming-Setup-16-680x434.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191457023000586/maxresdefault_1.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191461393334272/vonguru_images_hardware_top_setup_cover-889x500.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191467412291585/maxresdefault_2.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191469022904350/maxresdefault.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191478846095388/pc-portable-pour-le-gaming.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191478846095388/pc-portable-pour-le-gaming.jpg"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setImage(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'rip'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/606123076186537987/rip1.gif", "https://cdn.discordapp.com/attachments/578454052938055691/606122946574024708/rip4.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606123043449864233/rip2.gif", "https://cdn.discordapp.com/attachments/578454052938055691/606122963854426113/rip8.png", "https://cdn.discordapp.com/attachments/578454052938055691/606122951015661578/rip6.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122951133364235/rip7.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122948650205195/rip5.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122946234286113/rip3.png"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setImage(answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "uptime")){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }

message.delete();

let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; 
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `<:uptime:605807096939937794> ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

var embed220 = new Discord.RichEmbed()
.setTitle("Uptime")
.setDescription(uptime)
.setColor("RANDOM")
.setTimestamp()
.setFooter("Uptime du bot.")
message.channel.send(embed220)

}
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'dé'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#0FDC88")
            .setTitle(answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'roulette'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
 
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["vivant !!", "Mort...", "vivant !!", "Mort...", "vivant !!", "Mort...", "vivant !!", "Mort...", "vivant !!", "Mort..."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#0FDC88")
            .setTitle(answers[Math.floor(Math.random() * answers.length)])
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'avatar') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#84B6DB")
            .setImage(message.author.avatarURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'owner') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#9A44B8")
            .addField("**__Créateur du serveur :__**", message.guild.owner)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
            message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'IDowner') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#9A44B8")
            .addField("**__ID du créateur du serveur :__**", message.guild.ownerID)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'support') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#9A44B8")
            .setTitle("**Clique ici**")
            .setDescription("**pour rejoindre le serveur support.**")
            .setURL("https://discord.gg/v5cBvdK")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'IDserver') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#9A44B8")
            .addField("**__ID du serveur__**", message.guild.id)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'siteweb') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#94AB48")
            .setTitle("**Clique ici**")
            .setDescription("**pour aller sur le site web TECHNOBOY.**")
            .setURL("https://technoboy-official.webnode.fr")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'server-membre') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#E59F59")
            .addField("**__Le nombre de membre sur ce serveur est :__**", message.guild.memberCount)
            .setFooter(message.guild.name, message.author.avatarURL)
            .setTimestamp()
        message.author.send(embed)
    } 
});

client.on('message', message => {
    if (message.content === prefix + 'server-membre') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#94DC0D")
            .addField("Votre demande à été envoyer" + "\n" + "Vérifié vos message privé", message.author.tag)
            .setTimestamp()
        message.channel.send(embed).then(message => message.delete(3000));
    }
});

client.on('message', message => {
    if (message.content === prefix + 'ytb') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#94AB48")
            .setTitle("<:YouTube:605366488286625813> **Clique ici**")
            .setDescription("**pour sur la chaîne youtube de TECHNOBOY.**")
            .setURL("https://www.youtube.com/channel/UCzYSf-VLGKlqmnT6_E3hAXw?view_as=subscriber")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'invite') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#94AB48")
            .setTitle("**Clique ici**")
            .setDescription("**pour m'ajouter sur ton serveur.**")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=602588181526741002&scope=bot&permissions=1341644233")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'infos') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600; 
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let uptime = `${hours} heures, ${minutes} minutes, ${seconds} secondes`;

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.tag)
            .setTitle("<:robot:605807067474821176> **__MES INFOS :__** <:robot:605807067474821176>")
            .addField("<:prenom:605807052320931862> | Prénom", "**TECHNOBOT**")
            .addField("<:id:605807021073104913> | **ID**", "**602588181526741002**")
            .addField("<:superieura:605810330563772435> | **Préfix par défault**", "**t/**")
            .addField("<:insta:605810975236423701> | **Instagramme du créateur**", "**destructor_du_71**")
            .addField("<:snap:605810633451110414> | **Snap du créateur**", "**loic_val56771**")
            .addField("<a:lowding2:603917000397422594> | **Latence**", "**"+client.ping+"**")
            .addField("<:createur:605806975594397701> | **Créateur**", "**<@574544938440851466>**")
            .addField("<:createur:605806975594397701> | **Date de création du bot**", "**26 juin 2018**")
            .addField("<:javascript:605809323553325056> | **Language**", "**JavaScript**")
            .addField("<:version:605807133874978835> | **Version**", "**2.0.5**")
            .addField("🎰 | Commandes", "**56**")
            .addField("<a:givefun:603916686252572672> | **Je suis sur**", message.client.guilds.size + " **serveurs**")
            .addField("<:uptime:605807096939937794> | **Uptimes**", "**"+uptime+"**")
            .addField("<:hbergement:605807006430920838> | **Hébergement**", "***Bot pas encore héberger***")
            .setFooter(message.author.tag, "https://cdn.discordapp.com/attachments/603765758970953749/605845593646039041/ppdemonbot.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/603765758970953749/605845593646039041/ppdemonbot.png")
            .setImage("https://cdn.discordapp.com/attachments/578454052938055691/606160248889278464/GLITCHO_GIF_20190731_182212.gif")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.guild) return;
    let chaine = message.guild.channels.find('name', '┊▷-logs-messages');
    if(chaine) chaine.send("```diff" + "\n" + "- Auteur: " + message.author.username + "\n" + "- ID : " + message.author.id + "\n" + "\n" + "- Message :" + "\n" + message.content + "\n" + "\n" + "- Channel :" + "\n" + message.channel.name + "\n" + "\n" + "```");
});

client.on('message', message => {
    if (message.content === prefix + 'help-logs') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("**__Comment avoir les logs des mesasge de son serveur ?__**", "C'est simple, il vous uffit de faire la commande si dessous pour créé un channel qui ne faudras __**surtout pas**__ touché, vous pouvez le déplacer seulement !" + "\n" + "**__Commande :__** ``t/channel-log``")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "channel-log")) {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({
          embed: {
              color: 0x9400d3,
              description: `<@${message.author.id}> **Vous avez pas la perm gèrer les roles !**`
          }
      });
      let aicon = message.author.displayAvatarURL;
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("**Le salon vient d'être crèe !**")
      .setTimestamp()
      .setFooter("salon crèe", aicon)
      .addField("salon crèe par", `<@${message.author.id}>`);
      
      
      message.guild.createChannel("┊▷-logs-messages");
      message.channel.send(embed);
      }
})

client.on('message', message => {
    if (message.content === prefix + 'serveur') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Je suis sur " + message.client.guilds.size + " serveurs")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'dons') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("【  ۝  】")
            .addField("**__Comment me soutenir ?__**", "**Il vous suffit de me faire un dons en appuyant sur le boutons** ۝." + "\n" + "J'accepte tout somme donné, je peut aussi vous faire une photo de profile normal ou en gif, voir les prix en bah =>" + "\n" + "\n" + "\n" + "**Une photo de profile simple = 0.30 centimes**" + "\n" + "**Une photo de profile gif = 0.60 centimes**" + "\n" + "\n" + "***Merci d'avance :wink:***")
            .setURL("https://www.paypal.me/givemeformyentrepris")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'userinfos') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#E6EB3D")
            .setTitle("**Infos de l'utilisateur :**")
            .addField("<:robot:605807067474821176> | **Avatar lien**", "**"+message.author.avatarURL+"**")
            .addField("<:id:605807021073104913> | **User ID**", "**"+message.author.id+"**")
            .addField("<:hachtag:605806992283664434> | **Tag user**", "**"+message.author.tag+"**")
            .addField("<:createur:605806975594397701> | **Création du compte**", "**"+message.author.createdAt+"**")
            .addField("<a:lowding2:603917000397422594> | **Latence**", "**"+client.ping+"**")
            .setFooter(message.author.tag, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'serverinfos') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#E6EB3D")
            .setTitle("**Information sur le serveur :**")
            .addField("Nom du serveur", "╭▷**"+message.guild.name+"**")
            .addField("Serveur ID", "┊▷**"+message.guild.id+"**")
            .addField("Channel AFK", "┊▷**"+message.guild.afkChannel+"**")
            .addField("Channel AFK ID", "┊▷**"+message.guild.afkChannelID+"**")
            .addField("Créateur du serveur", "┊▷**"+message.guild.owner+"**")
            .addField("ID du créateur du serveur", "┊▷**"+message.guild.ownerID+"**")
            .addField("Création du serveur", "┊▷**"+message.guild.createdAt+"**")
            .addField("Membre", "╰▷**"+message.guild.memberCount+"**" + "\n")
            .setFooter(message.guild.name, message.guild.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Pong :ping_pong:", "```fix" + "\n" + client.ping + " de latence." + "\n" + "```")
        .setTimestamp()
    message.channel.send(embed)
  }
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Qui ça :question:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas :confused:")
       message.guild.ban(member, {days: 7})
       message.channel.send("<:robotban:603917484126371860> **"+member.user.username + '** a été bani <a:valider:607208649286483988>')
       .then(function (message) {
           message.react("✅")
       })
    }
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Qui ça :question:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peut pas :confiused:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été kick <a:valider:607208649286483988>')
       .then(function (message) {
        message.react("✅")
    })
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
        message.channel.send("<:supprimer:605735485880664078> **Les messages demander ont bien été supprimé !** <:supprimer:605735485880664078>" + "\n" + "      *Le message vas ce supprimer automatiquement.*").then(message => message.delete(5000));
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'annonce'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete(); 

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#0FDC88")
            .setTitle(question)
        message.channel.send(embed)
        .then(function (message) {
            message.react("👍")
        })
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'sondage'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#0FDC88")
            .setTitle(question)
            .setDescription("*répond avec ❌pour non, ou ✅pour oui*")
        message.channel.send(embed)
        .then(function (message) {
            message.react("❌")
            message.react("✅")
        })
    }
});

client.on('message', message => {
    if (message.content === prefix + 'ArAna') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("ORANGE")
            .setTitle("C'est quoi **__Arana__** ?")
            .addField("**__ArAna__** est un serveur Minecraft pour Cracker, le jeu est modé.", "*Pour plus d'explication, rejoignez le serveur si dessous* => https://discord.gg/knaN66q")
        message.author.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'hgiveway') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setTitle(":tada: **__GIVEWAY explication :__** :tada:")
            .setDescription("**Pour commencer un giveway faite** ``>giveway {votre giveway}`` **et pour le finir faite** ``>winner {mentionner un membre}`` **.**")
            .addField(":warning: **__ATTENTION !__** :warning:", "**Le bot ne désigne pas un membre au hazard, il faut le désignez soit même !**")
        message.author.send(embed)

    }
});

client.on('message', message => {
    if (message.content === prefix + 'hgiveway') {
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setTitle("**Message envoyer**")
            .setDescription("**vérifié vos mp (messages privés)**")
            .setURL("https://discord.gg/HXZ5AJE")
        message.channel.send(embed).then(message => message.delete(3000));
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'giveway'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor("#0FDC88")
            .setAuthor(message.author.tag)
            .setTitle(question + ", *pour participer, appuyez sur :tada:*")
        message.channel.send(embed)
        .then(function (message) {
            message.react("🎉")
                  })
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + 'winner'){
        if(blacklist[message.author.id]){
        return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
    }
        message.delete();

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("veuillez mentionnez un membre.")

    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setColor("#0FDC88")
            .setTitle(member.user.username + " **a gagnez le __Giveway__, GG à lui !** <a:givefun:603916686252572672>")
        message.channel.send(embed)
        .then(function (message) {
            message.react("🤘")
            message.react("✋")
            message.react("👍")
            message.react("👏")
            message.react("🤙")
            message.react("😇")
                  })
    }
});

client.on('message', message => {
    if (message.content === prefix + 'IDchannel') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#0FDC88")
            .addField("**__Channel ID__**", message.channel.id)
        message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === prefix + 'myID') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("**__Voici ton ID :__**", message.author.id)
            .setTimestamp()
        message.author.send(embed)
    }
});

client.on('message', function (message) {
    if(message.content.startsWith(prefix + "report")) { 
        if(blacklist[message.author.id]){
            }
        if (!message.guild) return
        let args = message.content.trim().split(/ +/g)
        
let msg = args.slice(1).join(" ")

let embed2 = client.channels.get('607319189962620969');
let report = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:Sirne:603917575251820545> **REPORT** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Ecrit par : ${message.author.tag}`)
        .addField(`ID:`, message.author.id)
        .addField("Contenue :", "**" + msg + "**")
        .setColor("RANDOM")
        .setFooter(`Report | Vos question, notre progression !`)
        .setTimestamp();
    embed2.send(report);

    }
});

client.on('message', message => {
    if (message.content === prefix + 'report') {
        if(blacklist[message.author.id]){
            }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("<a:valider:607208649286483988> **Message envoyé !**")
            .setDescription("**Votre message de report a bien été envoyer au staff de TECHNOBOT**" + "\n" + "<:warning:603917749764358155> **Ne supprimer pas le channel** ``┊▷-report`` ni le renommer ! ceci est notre moyen de communication avec vous !")
            .setTimestamp()
            .setFooter(message.channel.name, message.author.avatarURL)
        message.channel.send(embed).then(message => message.delete(11000));
    }
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'say'){
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let msg = args.slice(1).join(" ")
        message.channel.send(msg)
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "report")) {
        if(blacklist[message.author.id]){
         }
        message.delete();
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({
          embed: {
              color: 0x9400d3,
              description: `<@${message.author.id}> **Vous avez pas la perm gèrer les roles !**`
          }
      });
      let aicon = message.author.displayAvatarURL;
      let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("<a:valider:607208649286483988> **Message envoyé !**")
      .setDescription("**Votre message de report a bien été envoyer au staff de TECHNOBOT**" + "\n" + "<:warning:603917749764358155> **Ne supprimer pas le channel** ``┊▷-report`` **ni le renommer ! ceci est notre moyen de communication avec vous !**")
      .setTimestamp()
      .setFooter(message.channel.name, message.author.avatarURL);
      
      
      message.guild.createChannel("┊▷-report");
      message.channel.send(embed).then(message => message.delete(9000));
      }
});

client.on('message', message => {
    if (message.channel.name === '┊▷-report' && !message.author.bot) {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
    	if(message.author.id);
          message.guild.channels.filter(c => c.type === "text").random().createInvite().then(invite => {let lien = invite.code;
            const embed = {
                "color": 23606,
                "footer": {
                    "icon_url": client.user.avatarURL,
                    "text": client.user.tag
                },
                "fields": [
                    {
                        "name": "<a:flche1:603916645215502363> Ｃｏｎｔｅｎｕ <:bouclier:605366430770266122>",
                        "value": "▷ **" + message.content + "**"
                    },
                    {
                        "name": '\u200B',
                        "value": '\u200B'
                    }
                ]
            };
            client.channels.forEach(channel => {
                if(channel.name === '┊▷-report' && channel.type === 'text' && channel.id !== message.channel.id) {
                    channel.send({ embed });
                }
            });
        });
    }
});

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a été warn pour " + reason + " :white_check_mark: <:warn:605366350419853322>")
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        message.delete();
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('<:warn:605366350419853322> 10 derniers warns <:warn:605366350419853322>', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    //unwarn
    if (args[0].toLowerCase() === prefix + "unwarn") {
        message.delete();
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande.")
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
        if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unwarn ce membre.")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send("Le dernier warn de " + member + " a été retiré <:warn:605366350419853322>")
    }
});

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "mute") {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Qui voulez vous Mute ?")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas...")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
});

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    //unmute
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
    }
});

client.on("message", message => {
    if (message.content === prefix + 'miseajoure') {
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        message.delete();
        let on_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Mise à jour terminer !")
            .addField("J\'ai commancé ma surveillance dans ", client.guilds.size + " serveurs," + "\n" + client.channels.size + " channels," + "\n" + client.users.size + " utilisateurs.") 
        
        client.guilds.get("596020968707850240").channels.get("609342868850475054").send(on_embed)
        }else{
            message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
            }
});

client.on('message', message => {
    if (message.channel.name === 'inter-serveur' && !message.author.bot) {
        if(inter[message.author.id]){
            return message.channel.send('**Vous êtes punis, vous ne pouvez donc pas utiliser l\'inter-server.**')
        }
    	if(message.author.id);
          message.guild.channels.filter(c => c.type === "text").random().createInvite().then(invite => {let lien = invite.code;
            const embed = {
                "color": 23606,
                "footer": {
                    "icon_url": client.user.avatarURL,
                    "text": client.user.tag
                },
                "author": {
                    "name": JSON.parse.text,
                    "url": "https://discordapp.com",
                    "icon_url": JSON.parse.image
                },
                "fields": [
                    {
                        "name": "<a:flche1:603916645215502363> Ｃｏｎｔｅｎｕ <:bouclier:605366430770266122>",
                        "value": "▷ **" + message.content + "**"
                    },
                    {
                        "name": '\u200B',
                        "value": '\u200B'
                    },
                    {
                        "name": "<a:flche1:603916645215502363> Ａｕｔｅｕｒ <:bouclier:605366430770266122>",
                        "value": "╭▷**"+message.author.tag+"**" + "\n" +  "╰▷**"+message.author.id+"**",
                    },
                    {
                        "name": "<a:flche1:603916645215502363> Ｄｅｐｕｉｓ-ｌｅ-ｓｅｒｖｅｕｒ <:bouclier:605366430770266122>",
                        "value": "╭▷**"+message.guild.name+"" + "\n" +  "┊▷**"+message.guild.id+"**" + "\n" +  "╰▷**"+invite
                    }
                ]
            };
            client.channels.forEach(channel => {
                if(channel.name === 'inter-serveur' && channel.type === 'text' && channel.id !== message.channel.id) {
                    channel.send({ embed });
                }
            });
        });
    }
});

client.on('message', message => {
    if (message.content === prefix + 'miseajoure') {
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
        if (Staff.includes(message.author.id)) {
        message.delete();

        message.channel.send('**Mise à jour éffectuer, je reprend mon travail sur ' + client.guilds.size + 'serveurs !**').then(message => message.delete(5000));

        var channel = client.channels.find('id', '609795324860432384')
        channel.setName(`┊▷Serveur Count: ${client.guilds.size}`)
        }
    }
});

client.on('message', message => {
    if (message.content === prefix + 'miseajoure') {
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
        if (Staff.includes(message.author.id)) {
        message.delete();

        var channel = client.channels.find('id', '609795359031689256')
        channel.setName(`┊▷Channels Count: ${client.channels.size}`)
        }
    }
});

client.on('message', message => {
    if (message.content === prefix + 'miseajoure') {
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
        if (Staff.includes(message.author.id)) {
        message.delete();

        var channel = client.channels.find('id', '609795379734773781')
        channel.setName(`┊▷Utilisateur Count: ${client.users.size}`)
        }
    }
});

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .addField("**"+member.user.username + " nous a rejoind !!**", ":tada: Nous sommes désormais **" + member.guild.memberCount + "**")
    member.guild.channels.get('604356553512058900').send(embed)
    
    var channel = client.channels.find('id', '609800444684009515')
        channel.setName(`┊▷Member Count: ${member.guild.memberCount}`)
});

client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setColor("RED")
        .addField("**"+member.user.username + " nous a quitté !!**", ":cry: Nous sommes désormais **" + member.guild.memberCount + "**")
    member.guild.channels.get('604356553512058900').send(embed)

    var channel = client.channels.find('id', '609800444684009515')
        channel.setName(`┊▷Member Count: ${member.guild.memberCount}`)
});

client.on('message', function (message) {
    
    if(message.content.startsWith(prefix + "punition")) { 
        if(message.author.bot) return;
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        
const id = args[0]
const iduser = args[0]
const reason = message.content.split(" ").slice(18);
if(!id) return message.channel.send("**Merci de mettre un id d'utilisateur.**")

let bl = client.channels.get('609058815551471628');
let blacklist1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:Sirne:603917575251820545> **INTER PUNITION** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Punis par : ${message.author.tag}`)
        .addField(`ID:`, `${id}`)
        .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
        .setColor("#36393f")
        .setFooter(`Inter-Punition | Votre protection, notre fièrter !`)
        .setTimestamp();
    bl.send(blacklist1);

    if (inter[id]) {
        return message.channel.send("<:warning:603917749764358155> Erreur: **ID** déjà Punis ");
    }else{
    if (id.length === 0) {
    inter[id] = {"reason" : true, "date" : true, "author" : true};
    message.delete();
    
    }else{
//    blacklist[id] = {"reason" : "Blacklisted-Id: " + args.join(" ") + ". Blacklisted by: " + message.author.username};

    inter[id] = {"reason" : args.join(" ").slice(18), "date" : moment.utc(message.createdAt).format('LL'), "author" : message.author.tag};
    message.delete();
    var embedbl = new Discord.RichEmbed()
    .setTitle(":inbox_tray:  Succès !")
    .setColor("#36393f")
    .setDescription(`**<:Moderator:604724426386440192>  ID** ` + '"' + id + '"' + `**a bien été punis !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 TECHNOBOT", client.user.displayAvatarURL)
    message.channel.send(embedbl)
    }
    fs.writeFile("./json/inter.json", JSON.stringify(inter), (err) => { if (err) console.error(err);});
    var channel = client.channels.find('id', '609058815551471628')
    channel.setName(`Utilisateurs punis : ${Object.keys(inter).length}`)
    }
    console.log(`[BlackList] "${id}" a été blacklist! Par: ${message.author.username}. Raison: ${args}`)
}else{
    message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
    }
});

client.on('message', message => {
    if (message.content === prefix + 'help-inter-server') {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete();

        let embed = new Discord.RichEmbed()
            .setColor("#386193")
            .setTitle("<a:gyror:443772476187607040><:bouclier:605366430770266122> **__Comment Marche l'inter-server ?__** <:bouclier:605366430770266122><a:gyror:443772476187607040>")
            .addField("Pour avoir l'inter-server chez vous, il vous suffit de créé un salon nommé ``inter-serveur`` puis de parler sans __aucune__ commande dans le salon.", ":warning: | **Ne mettez rien avant ou après le prénom du salon ! Sinon ca ne marchera pas !!**")
            .setTimestamp()
        message.channel.send(embed)
    }
});

client.on('message', function (message) {
    
    if(message.content.startsWith(prefix + "bl")) { 
        if(message.author.bot) return;
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        
const id = args[0]
const iduser = args[0]
const reason = message.content.split(" ").slice(18);
if(!id) return message.channel.send("**Merci de mettre un id d'utilisateur.**")

let bl = client.channels.get('603960491194449952');
let blacklist1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:Sirne:603917575251820545> **ADDBLACKLIST** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Ajout par : ${message.author.tag}`)
        .addField(`ID:`, `${id}`)
        .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
        .setColor("#36393f")
        .setFooter(`BlackListed | Votre protection, notre fièrter ! V 1.2`)
        .setTimestamp();
    bl.send(blacklist1);

    if (blacklist[id]) {
        return message.channel.send("<:Moderator:604724426386440192> Erreur: **ID** déjà blacklist ");
    }else{
    if (id.length === 0) {
    blacklist[id] = {"reason" : true, "date" : true, "author" : true};
    message.delete();
    
    }else{
//    blacklist[id] = {"reason" : "Blacklisted-Id: " + args.join(" ") + ". Blacklisted by: " + message.author.username};

    blacklist[id] = {"reason" : args.join(" ").slice(18), "date" : moment.utc(message.createdAt).format('LL'), "author" : message.author.tag};
    message.delete();
    var embedbl = new Discord.RichEmbed()
    .setTitle(":inbox_tray:  Succès !")
    .setColor("#36393f")
    .setDescription(`**<:Moderator:604724426386440192>  ID** ` + '"' + id + '"' + `**a bien été blacklisté !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 Blextaz", client.user.displayAvatarURL)
    message.channel.send(embedbl)
    }
    fs.writeFile("./json/blacklist.json", JSON.stringify(blacklist), (err) => { if (err) console.error(err);});
    var channel = client.channels.find('id', '603960491194449952')
    channel.setName(`Utilisateurs blacklist : ${Object.keys(blacklist).length}`)
    }
    console.log(`[BlackList] "${id}" a été blacklist! Par: ${message.author.username}. Raison: ${args}`)
}else{
    message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
    }

    if(message.content.startsWith(prefix + "unbl")) {
        if(message.author.bot) return;
        message.delete(message.author);
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
if (Staff.includes(message.author.id)) {

    let args = message.content.split(" ").slice(1);
    const iduser = args[0]
const id = args[0]
if(!id) return message.channel.send("**Merci de mettre un id d'utilisateur.**")

let bl = client.channels.get('603960491194449952');
    let blacklist1 = new Discord.RichEmbed()
    .setTitle(`:outbox_tray: **UNBLACKLIST**`)
    .setDescription(`Retrait par : ${message.author.tag}`)
    .addField(`ID:`, `${id}`)
    .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
    .setColor("#36393f")
    .setFooter(`UnBlackListed | Votre protection, notre protecion ! V 1.2`)
    .setTimestamp();
    bl.send(blacklist1);

if (blacklist[iduser]) {
delete blacklist[iduser];
if (message.member.nickname === null) {
message.channel.send(`🔴 **ID** ` + '"' + id + '"' + `A bien été UnBlackList :wink:`).then(message => message.delete(5000));    
}else{
    var embedbl = new Discord.RichEmbed()
    .setTitle(":outbox_tray: Succès !")
    .setColor("#36393f")
    .setDescription(`**🕯ID** ` + '"' + id + '"' + `**a bien été unblacklisté !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 TECHNOBOT", client.user.displayAvatarURL)
    message.channel.send(embedbl).then(message => message.delete(5000));
}
fs.writeFile("./json/blacklist.json", JSON.stringify(blacklist), (err) => { if (err) console.error(err);});
var channel = client.channels.find('id', '603960491194449952')
channel.setName(`Utilisateurs blacklist : ${Object.keys(blacklist).length}`)
}else{
message.channel.send(`🛡 [ERROR]: Cet **ID** n'est pas dans la BlackList du bot`).then(message => message.delete(2000));
}
}else{
message.channel.send(`:octagonal_sign: Désolé mais tu n'est pas du staff ${message.author} !`).then(message => message.delete(2000));


}
    }

    if(message.content.startsWith(prefix + "checkid")) {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        if(message.author.bot) return;
            message.delete(message.author);
    
            const args = message.content.slice(2).trim().split(/ +/g);
    
            const argsp = message.content.trim().slice(9)
    
            if(!argsp) return message.channel.send(`**Merci de mettre un id d'utilisateur.**`)
    
            client.fetchUser(args[1]).then(user => {
            
                
    
                if(!blacklist[args[1]]) return message.channel.send(`**<:Moderator:604724491599216680> L\'id ${argsp} ne semble pas être dans la blacklist .**`);
    
                let checkidtrueEmbed = new Discord.RichEmbed()
                    .setTitle(" **CheckID :**")
                    .setThumbnail(user.avatarURL)
                    .addField(" **ID du BlackList :**", "`"+args[1]+"`")
                    .addField(" **Nom du BlackList:**", "`"+user.tag+"`")
                    .addField(" **BlackList : ?**", "`Cet utilisateur est dans la BlackList.`", )
                    .addField("**Blacklisté le : **", "`"+blacklist[user.id].date+"`")
                    .addField(" **Reason :**", `${blacklist[user.id].reason}`)
                    .addField("**Blacklist par : **", "`"+blacklist[user.id].author+"`")
                    //.addField(":fbleu: Raison du GBan :", "`"+args[2]+"`")
                    .setFooter("© 2019 Blextaz", client.user.displayAvatarURL)
                    .setTimestamp()
                    .setColor('#36393f')
    
                            if(blacklist[args[1]]) return message.channel.send(checkidtrueEmbed);
            }).catch((err) => {
        if (err) return message.channel.send(`Unknow ID`);
        });
    }

    if(message.content.startsWith(prefix + "verify")) {
        if(blacklist[message.author.id]){
            return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
        }
        message.delete(message.author)
    
                if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:Moderator:604724491599216680> Vous ne pouvez pas utiliser cette commande\n\cordialement,\nle staff du bot!")
                var found = []
                message.guild.members.forEach(m => {
                    if(blacklist[m.id] !== undefined) found.push("`" + m.user.tag + " | " + m.id + "` > " + blacklist[m.id].reason)
                })
                if(found.length === 0){
                    let verifyon = new Discord.RichEmbed()
                
                    .setColor("#36393f")
                    .setDescription("**Aucun joueur de ce Discord n'est présent dans la liste noir !\n\n<:bouclier:605366430770266122> Votre serveur est sécurisé.**")
    
                    message.channel.send(verifyon)
                    return
                }
                let verifyno = new Discord.RichEmbed()
    
                .setColor("#36393f")
                .setDescription("**" + found.length + "joueurs blacklisté(s) :\n\n- " + found.join("\n- ") + "**")
    
                message.channel.send(verifyno)
    }

});