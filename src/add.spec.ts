import { describe, expect, it } from "vitest";

import { add } from "./add";

function randomInt() {
  return Math.floor(Math.random() * 10_000);
}

describe("add", () => {
  it("should work for any integers", () => {
    for (let i = 0; i < 100; i++) {
      const a = randomInt();
      const b = randomInt();
      const expected = a + b;
      const result = add(a, b);
      expect(result).toBe(expected);
    }
  });
});
