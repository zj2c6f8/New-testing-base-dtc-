const { cmd } = require('../command');
const { sendButtons, sendListButtons } = require('../lib/buttons');
const config = require('../config');

// පේනවා 100% — Quick-reply buttons (WhatsApp + WhatsApp Business දෙකෙම වැඩ කරයි)
cmd({
    pattern: "hashiya",
    alias: ["btn", "buttons"],
    desc: "Show tappable quick-reply buttons",
    category: "main",
},
async (conn, mek, m, { reply, pushname }) => {
    try {
        await sendButtons(conn, m.chat, {
            text: `👋 ආයුබෝවන් *${pushname || 'Friend'}*!\n*${config.𝗦𝗜𝗧𝗛𝗨𝗪𝗔 𝗠𝗗}* එකට සාදරයෙන් පිළිගනිමු.\n\nපහත බටන් එකක් තට්ටු කරන්න:`,
            footer: config.BOT_NAME,
            buttons: [
                { id: ".menu", text: "📜 Menu" },
                { id: ".alive", text: "💓 Alive" },
                { id: ".ping", text: "⚡ Ping" }
            ],
            quoted: mek
        });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});

// List-style menu — කැටගරි එකක් තෝරගන්න පුළුවන් bottom-sheet එකක්
cmd({
    pattern: "listmenu",
    alias: ["lmenu"],
    desc: "Show a tappable list menu",
    category: "main",
},
async (conn, mek, m, { reply, pushname }) => {
    try {
        const sections = [
            {
                title: "🚀 DOWNLOAD COMMANDS",
                rows: [
                    { title: "Song Downloader", rowId: ".song", description: "සින්දු බාගත කිරීමට" },
                    { title: "Video Downloader", rowId: ".video", description: "වීඩියෝ බාගත කිරීමට" }
                ]
            },
            {
                title: "⚙️ TOOLS",
                rows: [
                    { title: "Bot Menu", rowId: ".menu", description: "සම්පූර්ණ මෙනු එක" },
                    { title: "Bot Status", rowId: ".alive", description: "බොට් එක ඔන් ද කියලා බලන්න" }
                ]
            }
        ];

        await sendListButtons(conn, m.chat, {
            text: `👋 ආයුබෝවන් *${pushname || 'Friend'}*!\n*${config.BOT_NAME}* මෙනු එකට සාදරයෙන් පිළිගනිමු.\n\nපහත මෙනු එකෙන් අවශ්‍ය දේ තෝරන්න:`,
            footer: config.BOT_NAME,
            buttonText: "මෙනු එක බලන්න",
            sections,
            quoted: mek
        });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
