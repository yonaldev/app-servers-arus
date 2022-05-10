import { Server } from "./Server.types";

export interface Client {
  client: string;
  servers: Server;
}
