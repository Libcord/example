import glob from "glob";
import path from "node:path";
import Interaction from "../struct/interaction";
import CustomClient from "../struct/CustomClient";
import { ApplicationCommandBase } from "libcord/lib/src";

export default class InteractionHandler {
  public client: CustomClient;
  constructor(client: CustomClient) {
    this.client = client;
  }
  get directory() {
    return `${path.dirname(<string>require.main?.filename)}${path.sep}`;
  }
  async loadFiles(): Promise<any> {
    return glob(`${this.directory}Interactions/**/*.{ts,js}`, (er: any, files: any[]) => {
      if (er) throw new Error(er as unknown as string);
      for (const interactionFile of files) {
        // eslint-disable-next-line promise/catch-or-return
        import(interactionFile).then((File) => {
          const inter = new File.default(this.client);
          if (!(inter instanceof Interaction)) {
            throw new TypeError("[INTERACTIONS] Invalid interaction detected");
          }
          this.register(inter.options);
          return this.client.interactions.set(inter.options.name.toLowerCase(), inter);
        });
      }
    });
  }
  register(cmd: ApplicationCommandBase) {
    return this.client.createGuildApplicationCommand("976566685895114823", cmd);
  }
  init() {
    return this.loadFiles();
  }
}
