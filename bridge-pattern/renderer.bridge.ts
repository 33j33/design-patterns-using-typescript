import { IRenderingEngine } from "./types.ts";

export class WebRenderingEngine implements IRenderingEngine {
    renderElement(element: string, props: Record<string, unknown>): void {
        console.log(`${element} rendered to web with props ${JSON.stringify(props)}`)
    }
}

export class AndroidRenderingEngine implements IRenderingEngine {
    renderElement(element: string, props: Record<string, unknown>): void {
        console.log(`${element} rendered to android with props ${JSON.stringify(props)}`)
    }
}