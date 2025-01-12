import { IRenderingEngine } from "./types.ts";

// concrete implementation / bridge
export class WebRenderingEngine implements IRenderingEngine {
  renderElement(element: string, props: Record<string, unknown>): void {
    console.log(`${element} rendered to web with props ${JSON.stringify(props)}`);
  }
}

// concrete implemenation / bridge
export class AndroidRenderingEngine implements IRenderingEngine {
  renderElement(element: string, props: Record<string, unknown>): void {
    console.log(`${element} rendered to android with props ${JSON.stringify(props)}`);
  }
}
