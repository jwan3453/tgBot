const TelegramBot = require('node-telegram-bot-api');
const token = '7671998392:AAGe9N2AOyH_Y7Onq3JnF07d9N4T04i30uE';
const bot = new TelegramBot(token, {polling: true});

// bot.setWebHook('https://tma.internal:443/', {
//     certificate: 'cert.pem', // Path to your crt.pem
//   });

const webhookUrl = `https://tma.internal:443/webhook-endpoint`;

bot.setWebHook(webhookUrl, { certificate: 'cert.pem'})
  .then(result => {
    console.log('Webhook was set!', result);
  })
  .catch(error => {
    console.error('Failed to set webhook:', error);
  });



bot.on('message', (msg) => {

  //anything
  var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"Hello dear user");
        bot.sendPhoto(msg.chat.id,"https://cdn.bitkeep.vip/operation/u_b_ed4cc9b0-c1a2-11ef-b34d-b3f98ddb58b6.png" );
    }
});