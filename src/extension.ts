import * as sourcegraph from "sourcegraph";

export function activate(): void {
  sourcegraph.languages.registerHoverProvider(["*"], {
    provideHover: () => ({ contents: { value: "Meow" } })
  });
}
