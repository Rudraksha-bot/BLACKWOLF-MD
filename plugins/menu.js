/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const config = require('../config'); // fixed import
const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ${config.BOT_NAME} 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 3.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • MAIN*
*├ 2 • SEARCH*
*├ 3 • DOWNLOAD*
*├ 4 • GROUP*
*├ 5 • OWNER*
*├ 6 • FUN*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 BLACKwolf*`;

        const vv = await conn.sendMessage(from, { image: { url: config.MENU_IMG }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`
╔════════════════════════╗  
║ 🔧 **MAIN COMMAND LIST** 🔧 ║  
╚════════════════════════╝  

╭─━─〔 ⚡ Commands ⚡ 〕━━╮  
┃ ◈ alive
┃ ◈ menu  
┃ ◈ menu2  
┃ ◈ system  
┃ ◈ ping  
┃ ◈ runtime
┃ ◈ jid
╰─━─━─━─━─━─━─━─━─╯  

📊 Total Commands in MAIN: 7
`);
                        break;

                    case '2':
                        reply(`
╔════════════════════════╗  
║ 🔍 **SEARCH COMMAND LIST** 🔍 ║  
╚════════════════════════╝  

╭─━〔 ⚡ Commands ⚡ 〕━──━╮  
┃ ◈ yts  
┃ ◈ image 
╰─━─━─━━─━─━─━─━─━─╯  

📊 Total Commands in SEARCH: 2
`);
                        break;

                    case '3':
                        reply(`
╔════════════════════════╗  
║ 📥 **DOWNLOAD COMMAND LIST** 📥 ║  
╚════════════════════════╝  

╭─━━〔 ⚡ Commands ⚡ 〕━─━━╮  
┃ ◈ apk  
┃ ◈ twitter  
┃ ◈ gdrive  
┃ ◈ mediafire  
┃ ◈ fb  
┃ ◈ play
┃ ◈ play2  
┃ ◈ video   
┃ ◈ video2  
┃ ◈ yta  
┃ ◈ tiktok
┃ ◈ ytmp3
╰─━─━─━─━─━─━─━─━─━─╯  

📊 Total Commands in DOWNLOAD: 12
`);
                        break;

                    case '4':
                        reply(`
╔════════════════════════╗  
║ 👥 **GROUP COMMAND LIST** 👥 ║  
╚════════════════════════╝  

╭─━──━〔 ⚡ Commands ⚡ 〕━─━╮  
┃ ◈ mute  
┃ ◈ unmute  
┃ ◈ promote  
┃ ◈ demote  
┃ ◈ del  
┃ ◈ add  
┃ ◈ admins  
┃ ◈ groupdesc  
┃ ◈ groupinfo  
┃ ◈ gname  
┃ ◈ setsubject  
┃ ◈ tagall  
┃ ◈ hidetag  
┃ ◈ unlock  
┃ ◈ lock
┃ ◈ join  
┃ ◈ leave  
┃ ◈ invite  
┃ ◈ tagadmin
╰─━─━─━─━─━─━─━─━─━━─╯  

📊 Total Commands in GROUP: 20
`);
                        break;

                    case '5':
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **OWNER COMMAND LIST** 👨‍💻 ║  
╚════════════════════════╝  

╭─━〔 🍿 Commands 🍿 〕━──━╮ 
┃ ◈ shutdown  
┃ ◈ alive  
┃ ◈ ping  
┃ ◈ clearchats  
┃ ◈ block
┃ ◈ unblock
┃ ◈ repo
┃ ◈ owner
┃ ◈ owner2
╰─━━─━─━──━─━─━━─━─╯  

📊 Total Commands in OWNER: 9
`);
                        break;

                    case '6':
                        reply(`
╔════════════════════════╗  
║ 🎉 **FUN/TOOLS COMMAND LIST** 🎉 ║  
╚════════════════════════╝  

╭─━〔 🍿 Commands 🍿 〕━──━╮ 
┃ ◈ joke  
┃ ◈ flirt  
┃ ◈ truth  
┃ ◈ dare  
┃ ◈ fact
┃ ◈ pickupline
┃ ◈ character
┃ ◈ repeat
┃ ◈ spam
┃ ◈ readmore
╰─━━─━─━──━─━─━━─━─╯  

📊 Total Commands in FUN/TOOLS: 10
`);
                        break;

                    default:
                        reply("Invalid option. Please select a valid option 🔴");
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
});
