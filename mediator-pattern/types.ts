export type Message = {
  from: string;
  to?: string;
  timestamp: number;
  content: string;
  id: string;
};

export type Event = "user-left" | "user-joined" | "message-sent" | "room-created";

export interface IUser {
  name: string;
  id: string;
  sendMessage(roomName: string, content: string): void;
  join(roomName: string): void;
  exit(roomName: string): void;
}

/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */

export interface IMediator {
  notify(namespace: string, event: Event, sender: unknown, receiver?: unknown, data?: unknown): void;
}
