// Emulating Expressjs

import { AuthMiddleware, LoggerMiddlerware, RateLimitMiddleware } from "./handlers.ts";
import { Server } from "./server.ts";
import { HttpRequest } from "./types.ts";

const server = new Server()

server.use(new LoggerMiddlerware)
server.use(new RateLimitMiddleware)
server.use(new AuthMiddleware)

// Simulate requests
const validRequest: HttpRequest = {
  url: '/api/v3/posts',
  method: 'GET',
  headers: { 'x-api-key': 'SECRET_KEY_231' },
  ip: '192.168.1.1',
};

const blockedRequest: HttpRequest = {
  url: '/api/v3/posts',
  method: 'GET',
  headers: {}, // Missing API key
  ip: '192.168.1.1',
};

console.log('--- Valid Request ---');
console.log(server.handleRequest(validRequest));

console.log('\n--- Blocked Request ---');
console.log(server.handleRequest(blockedRequest));