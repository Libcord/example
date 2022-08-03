import { Client, ClientOptions, Collection } from "libcord/lib/src";
import Interaction from "./interaction";

export default class CustomClient extends Client {
  public interactions: Collection<string, Interaction>;
  constructor(options?: ClientOptions) {
    super(options);
    this.interactions = new Collection<string, Interaction>();
  }
}
