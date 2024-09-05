const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'YOUR_BOT_TOKEN';
const AVATAR_PATH = path.join(__dirname, 'assets', 'your-animated-avatar.gif'); //This is where you place your GIF file

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    try {
        // Read GIF file
        const avatar = fs.readFileSync(AVATAR_PATH);
        
        // Set the avatar
        await client.user.setAvatar(avatar);
        console.log('Bot avatar successfully updated!');
    } catch (error) {
        console.error('Error updating bot avatar:', error);
    }
});

client.login(TOKEN);
