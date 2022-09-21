import * as dotenv from "dotenv";
import CustomClient from "./struct/CustomClient";
import InteractionHandler from "./handlers/InteractionHandler";
dotenv.config();

const client = new CustomClient({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES"],
});

client.on("ready", () => {
  console.log(`${client.user?.username} is ready`);

  new InteractionHandler(client).init();
});
client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const cmd = client.interactions.get(interaction.name);
    if (!cmd) return;

    await cmd.run(interaction);
  }
});
client.connect(process.env["TOKEN"] as string);
