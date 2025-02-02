export interface ICommand<T> {
  type: string;
  data: unknown;
  execute(doc: T): void;
  undo(doc: T): void;
  toJSON(): string;
}
