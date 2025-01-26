import { Event, IMediator, IUser, Message } from "./types.ts";

// Concrete Component
export class ChatRoomUser implements IUser {
  name: string;
  id: string;
  private mediator: IMediator;
  private rooms: Set<string>;
  constructor(name: string, mediator: IMediator) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.mediator = mediator;
    this.rooms = new Set();
  }
  sendMessage(roomName: string, content: string): void {
    const message: Message = {
      from: this.name,
      content,
      timestamp: Date.now(),
      id: crypto.randomUUID(),
    };
    this.mediator.notify(roomName, "message-sent", this.name, undefined, message);
  }
  receiveMessage(roomName: string, message: Message, sender: string): void {
    console.log(
      `\tnotification to ${this.name}: msg from ${sender} in ${roomName} \n\t ${
        message.content.slice(0, 120)
      }...`,
    );
  }
  join(roomName: string): void {
    this.rooms.add(roomName);
    this.mediator.notify(roomName, "user-joined", this);
  }
  exit(roomName: string): void {
    this.rooms.delete(roomName);
    this.mediator.notify(roomName, "user-left", this.name);
  }
  get userRooms() {
    return Array.from(this.rooms);
  }
}
