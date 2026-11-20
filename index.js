require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
    console.error("BOT_TOKEN is missing!");
    process.exit(1);
}

const bot = new TelegramBot(TOKEN, {
    polling: true
});

console.log("🎵 TERA OFFICIAL BOT is running!");

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId,
`🎵 WELCOME TO TERA OFFICIAL BOT 🎵

Your personal music assistant!

You can use this bot to:

🎧 Search for music
📥 Receive MP3 music files
🎼 Discover your favourite songs

━━━━━━━━━━━━━━

Use /help to see available commands.

Powered by TERA OFFICIAL.`);
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id,
`🎵 TERA OFFICIAL BOT COMMANDS

/start - Start the bot
/help - Show commands
/ping - Check bot status

More music features coming soon! 🚀`);
});

bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, "🟢 TERA OFFICIAL BOT is online!");
});

bot.on("polling_error", (error) => {
    console.log("Polling error:", error.message);
});