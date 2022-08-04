import Interaction from "../../struct/interaction";
import CustomClient from "../../struct/CustomClient";
import { ApplicationCommandType, CommandInteraction } from "libcord";

export default class PingCommand extends Interaction {
  constructor(client: CustomClient) {
    super(client, {
      name: "ping",
      description: "Simple ping command",
      type: ApplicationCommandType.CHAT_INPUT,
    });
  }
  run(interaction: CommandInteraction) {
    return interaction.reply(`My ping is ${this.client.ws.ping}ms`);
  }
}
