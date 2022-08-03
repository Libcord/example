import { ApplicationCommandType, ApplicationCommandOption } from "libcord/lib/src";
import CustomClient from "./CustomClient";

export interface InteractionOptions {
  name: string;
  type: ApplicationCommandType;
  description?: string;
  options?: ApplicationCommandOption[];
}
export default class Interaction {
  public client: CustomClient;
  public options: InteractionOptions;

  constructor(client: CustomClient, options: InteractionOptions) {
    this.client = client;
    this.options = options;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  run(_interaction: any) {
    throw new Error("No run function");
  }
}
