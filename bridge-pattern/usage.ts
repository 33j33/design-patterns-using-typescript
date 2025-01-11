// emulates how modern UI frameworks handle platform-specific rendering. 
// The abstraction (UI components) remains consistent while the implementation (rendering logic) varies by platform.

import { WebRenderingEngine } from "./renderer.bridge.ts";
import { IComponent, IRenderingEngine } from "./types.ts";

// concrete abstraction
class Button implements IComponent {
    name: string
    private engine: IRenderingEngine
    constructor(engine: IRenderingEngine){
        this.name = "button"
        this.engine = engine
    }
    render(props: Record<string,unknown>): void {
        this.engine.renderElement(this.name, props)
    }
}

// usage
const engine = new WebRenderingEngine()
const button = new Button(engine)
button.render({color: "blue", size: "small"})