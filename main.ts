// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const [pattern] = Deno.args;

  if (!pattern) {
    console.error("Usage: deno run main.ts <pattern>");
    Deno.exit(1);
  }

  try {
    // Dynamically import the module based on the provided pattern
    const modulePath = `./${pattern}/usage.ts`;
    await import(modulePath);

    // deno-lint-ignore no-explicit-any
  } catch (error: any) {
    console.error(`Failed to import module for pattern: ${pattern}`);
    console.error(error.message);
    Deno.exit(1);
  }
}
