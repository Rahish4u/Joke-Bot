const telegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const axios = require("axios");


dotenv.config();

const bot = new telegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
// bot.on("message", (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, "Hi i am Rahish's Bot, how can I help you?");
// });

bot.onText(/\/joke/, async(msg) => {
    const response = await axios.get("http://www.official-joke-api.appspot.com/random_joke");
    console.log(response.data);
    const setup = response.data.setup;
    const punchline = response.data.punchline;
    bot.sendMessage(msg.chat.id, setup + " " + punchline);
});