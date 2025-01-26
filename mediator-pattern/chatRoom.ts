import { IMediator, Message } from "./types.ts";

// Concrete Component
export class ChatRoom {
  private mediator: IMediator;
  chats: Message[];
  name: string;
  constructor(name: string, mediator: IMediator) {
    this.mediator = mediator;
    this.name = name;
    this.chats = [];
    this.mediator.notify("global", "room-created", this);
  }
  addMessage(message: Message) {
    this.chats.push(message);
  }
}
