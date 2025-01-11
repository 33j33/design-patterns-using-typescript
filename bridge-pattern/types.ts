// abstraction
export interface IComponent {
    name: string,
    render(props: Record<string,unknown>): void
}

// implementor / bridge interface
export interface IRenderingEngine {
    renderElement(element: string, props: Record<string,unknown>): void
}