import { RenderResult } from "./types.ts";

import { Element, HTMLDocument } from "jsr:@b-fuze/deno-dom";

export class DOMRenderer {
  private container: Element;
  private document: HTMLDocument;

  constructor(container: Element, document: HTMLDocument) {
    this.container = container;
    this.document = document;
  }

  public render(result: RenderResult): void {
    // In React you only update the part which is changed unlike what we are doing here
    this.container.innerHTML = "";
    const element = this.createDOMElement(result);
    this.container.appendChild(element);
    console.log("Container state:", this.container.innerHTML);
  }

  private createDOMElement(result: RenderResult): Element {
    const element = this.document.createElement(result.type);

    Object.entries(result.props).forEach(([key, value]) => {
      if (key === "className") {
        element.setAttribute("class", value as string);
      } else if (key === "textContent") {
        element.textContent = value as string;
      } else {
        element.setAttribute(key, String(value));
      }
    });

    result.children?.forEach(child => {
      const childElement = this.createDOMElement(child);
      element.appendChild(childElement);
    });
    return element;
  }
}
