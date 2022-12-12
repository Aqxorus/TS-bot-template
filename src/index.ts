import 'dotenv/config'
import { Client, Partials, GatewayIntentBits, Collection } from 'discord.js'
const { Guilds, GuildMembers, MessageContent, GuildPresences, GuildMessages } =
  GatewayIntentBits
const { User, Message, GuildMember, ThreadMember } = Partials
import { connect, connection } from 'mongoose'
import chalk from 'chalk'
const { TOKEN, MONGO_URI } = process.env

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
})

const mongoStatus = ['disconnected', 'connected', 'connecting', 'disconnecting']

client.on('ready', async () => {
  connect(MONGO_URI || ''),
    console.log(
      chalk.green(`[Database] MongoDB is ${mongoStatus[connection.readyState]}`)
    )
})
;async () => {
  const mongoStatus = [
    'disconnected',
    'connected',
    'connecting',
    'disconnecting',
  ]

  connect(MONGO_URI || ''),
    console.log(
      chalk.green(`[Database] MongoDB is ${mongoStatus[connection.readyState]}`)
    )
}

client.login(TOKEN)
