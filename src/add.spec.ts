import { describe, expect, it, test } from "vitest";

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

  test("adding 1 twice is the same as adding 2", () => {
    for (let i = 0; i < 100; i++) {
      const a = randomInt();
      expect(add(add(a, 1), 1)).toBe(add(a, 2));
    }
  });

  test("adding 0 is the same as doing nothing", () => {
    for (let i = 0; i < 100; i++) {
      const a = randomInt();
      expect(add(a, 0)).toBe(a);
    }
  });
});
