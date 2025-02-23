// Example 1 - React Class Component Lifecycle
// Although React Class Components are legacy but they are a good example of Template Method

import { DOMParser } from "jsr:@b-fuze/deno-dom";

import { DOMRenderer } from "./example1/DOMrenderer.ts";
import { User } from "./example1/UserComponent.ts";

const document = new DOMParser().parseFromString(
  `<body>
    <div id="app"></div>
   </body>
  `,
  "text/html"
);

const container = document.getElementById("app")!;
document.body.appendChild(container);

const renderer = new DOMRenderer(container, document);

const user = new User(
  {
    userId: "1",
    theme: "light",
    onUserLoad: username => {
      console.log(`User ${username} loaded successfully`);
    },
  },
  renderer
);

user.mount();
/**
 * 
 Container state: <div class="loading" data-theme="light"><span>Loading...</span></div>
 Container state: <div class="user-profile" data-user-id="1" data-theme="light"><span class="username">Bret</span><button onclick="()=>this.handleRefresh()">Refresh</button></div>
 User Bret loaded successfully
 */
