import { describe, expect, it } from "vitest";

import { add } from "./add";

function randomInt() {
  return Math.floor(Math.random() * 10_000);
}

describe("add", () => {
  it("should not depend on param order", () => {
    for (let i = 0; i < 100; i++) {
      const a = randomInt();
      const b = randomInt();
      expect(add(a, b)).toBe(add(b, a));
    }
  });
});
