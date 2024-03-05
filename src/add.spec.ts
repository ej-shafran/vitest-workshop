import { describe, expect, it, test } from "vitest";
import fc from "fast-check";

import { add } from "./add";

describe("add", () => {
  it("should not depend on param order", () => {
    const property = fc.property(fc.integer(), fc.integer(), (a, b) => {
      expect(add(a, b)).toBe(add(b, a));
    });

    fc.assert(property);
  });

  test("adding 1 twice is the same as adding 2", () => {
    const property = fc.property(fc.integer(), (a) => {
      expect(add(add(a, 1), 1)).toBe(add(a, 2));
    });

    fc.assert(property);
  });

  test("adding 0 is the same as doing nothing", () => {
    const property = fc.property(fc.integer(), (a) => {
      expect(add(a, 0)).toBe(a);
    });

    fc.assert(property);
  });
});
