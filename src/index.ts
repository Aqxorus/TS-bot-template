import { config } from 'dotenv';
config();
import { Client, Partials, GatewayIntentBits, Collection } from 'discord.js';
const { Guilds, GuildMembers, MessageContent, GuildPresences, GuildMessages } =
  GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [
    Guilds,
    GuildMembers,
    MessageContent,
    GuildPresences,
    GuildMessages,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
  failIfNotExists: false,
  allowedMentions: { parse: ['users', 'roles', 'everyone'], repliedUser: true },
});

client.on('ready', async () => {
  console.log('The bot is ready');
});

client.login(process.env.TOKEN);
