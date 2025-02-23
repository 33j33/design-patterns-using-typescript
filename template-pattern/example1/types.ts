export type ComponentUpdatePayload<P, S> = {
  nextProps?: P;
  nextState?: Partial<S>;
};

export type RenderResult = {
  type: "div" | "span" | "button" | "input";
  children?: RenderResult[];
  props: Record<string, unknown>;
};

export type ErrorInfo = {
  componentStack: string;
};

export interface Renderder {
  render(result: RenderResult): void;
}
