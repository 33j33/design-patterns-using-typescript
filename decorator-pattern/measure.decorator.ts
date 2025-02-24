// method decorator
export function measure(mode?: "debug") {
  // deno-lint-ignore ban-types
  return function (target: Function, context: ClassMethodDecoratorContext) {
    if (context.kind == "method") {
      // the `this` parameter must be the first parameter in the parameter list, and it only exists for type-checking purposes. It gets erased when TypeScript is compiled to JavaScript.
      return function (this: unknown, ...args: unknown[]) {
        const debug = mode === "debug";
        const name = context.name;
        const start = performance.now();
        debug && console.log(`entering fn: '${String(name)}' | params: ${args} | ${start}`);
        const result = target.apply(this, args);
        const end = performance.now();
        debug && console.log(`existing fn: '${String(name)}' | params: ${args} | ${end}`);
        console.log(`execution time for '${String(name)}' fn: ${end - start} ms`);
        return result;
      };
    }
  };
}
