import { ChatRoom } from "./chatRoom.ts";
import { ChatRoomUser } from "./chatRoomUser.ts";
import { Event, IMediator, Message } from "./types.ts";

/**
 * Concrete Mediators coordinates communication between components (chatRoom and chatRoomUser).
 */
export class Mediator implements IMediator {
  private roomUsersMap: WeakMap<ChatRoom, ChatRoomUser[]>;
  private roomsMap: Map<string, ChatRoom>;
  constructor() {
    this.roomUsersMap = new WeakMap();
    this.roomsMap = new Map();
  }
  notify(namespace: string, event: Event, sender: unknown, _receiver?: unknown, data?: unknown): void {
    if (namespace === "global" && event === "room-created") {
      const room = sender as ChatRoom;
      this.roomsMap.set(room.name, room);
      console.log(`${room.name} | ${event}`);
      return;
    }
    const room = this.roomsMap.get(namespace);
    if (!room) return;
    const roomUsers = this.roomUsersMap.get(room) || [];
    switch (event) {
      case "message-sent": {
        const message = data as Message;
        const senderName = sender as string;
        console.log(`${room.name} | ${event} | by ${sender} `);
        roomUsers
          .filter(user => user.name != senderName)
          .forEach(user => user.receiveMessage(room.name, message, senderName));
        room.addMessage(message);
        break;
      }

      case "user-left": {
        const userName = sender as string;
        console.log(`${room.name} | ${event} | ${sender}`);
        this.roomUsersMap.set(
          room,
          roomUsers.filter(user => user.name != userName)
        );
        break;
      }

      case "user-joined": {
        const user = sender as ChatRoomUser;
        roomUsers.push(user);
        console.log(`${room.name} | ${event} | ${user.name}`);
        this.roomUsersMap.set(room, roomUsers);
        break;
      }
      default: {
        console.error("invalid event");
        break;
      }
    }
  }
}
