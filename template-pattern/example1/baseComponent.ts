import { ComponentUpdatePayload, ErrorInfo, Renderder, RenderResult } from "./types.ts";

// Base component abstract class
export abstract class BaseComponent<P extends object, S extends object> {
  protected props: P;
  protected state: S;
  private mounted: boolean;
  private updateQueue: Array<Partial<S>>;
  private renderer: Renderder;

  constructor(props: P, renderer: Renderder) {
    this.props = props;
    this.state = this.getInitialState();
    this.mounted = false;
    this.updateQueue = [];
    this.renderer = renderer;
  }

  // Template method - orchestrates logic for mounting
  // mounts the component and starts rendering
  public mount(): void {
    try {
      this.componentWillMount();
      this.invokeRenderer();
      this.mounted = true;
      this.componentDidMount();
      this.processUpdateQueue();
    } catch (error) {
      this.handleError(error as Error, {
        componentStack: this.constructor.name,
      });
    }
  }

  // Template method - orchestrates logic for component state update
  public update(payload: ComponentUpdatePayload<P, S>): void {
    try {
      const shouldUpdate = this.shouldComponentUpdate(payload.nextProps || this.props, {
        ...this.state,
        ...payload.nextState,
      });

      if (shouldUpdate) {
        this.componentWillUpdate(payload);
        if (payload.nextProps) {
          this.props = payload.nextProps;
        }
        if (payload.nextState) {
          this.state = { ...this.state, ...payload.nextState };
        }
        this.invokeRenderer();

        this.componentDidUpdate(payload);
      }
    } catch (error) {
      this.handleError(error as Error, {
        componentStack: this.constructor.name,
      });
    }
  }

  // Template method - orchestrates logic for unmount
  public unmount(): void {
    try {
      this.componentWillUnmount();
      this.mounted = false;
    } catch (error) {
      this.handleError(error as Error, {
        componentStack: this.constructor.name,
      });
    }
  }

  // Protected method for state updates
  protected setState(nextState: Partial<S>): void {
    if (this.mounted) {
      this.update({ nextState });
    } else {
      this.updateQueue.push(nextState);
    }
  }

  private processUpdateQueue(): void {
    while (this.updateQueue.length > 0) {
      const nextState = this.updateQueue.shift();
      if (nextState) {
        this.setState(nextState);
      }
    }
  }

  private invokeRenderer(): void {
    const renderResult = this.render();
    this.renderer.render(renderResult);
  }

  // Abstract methods (must be implemented)
  protected abstract render(): RenderResult;
  protected abstract getInitialState(): S;

  // Hook methods (optional) for client to override and extend the component
  protected componentWillMount(): void {}
  protected componentDidMount(): void {}
  protected componentWillUpdate(payload: ComponentUpdatePayload<P, S>): void {}
  protected componentDidUpdate(payload: ComponentUpdatePayload<P, S>): void {}
  protected componentWillUnmount(): void {}
  protected handleError(error: Error, errorInfo: ErrorInfo): void {
    console.error("Component error:", error);
    console.error("Error info:", errorInfo);
  }

  protected shouldComponentUpdate(nextProps: P, nextState: S): boolean {
    return true;
  }
}
