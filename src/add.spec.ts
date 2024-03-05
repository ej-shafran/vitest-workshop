import { describe, expect, test, it } from "vitest";

import { add } from "./add";

describe("add", () => {
  test("2 + 2 = 4", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("should add 1 and 3 into 4", () => {
    expect(add(1, 3)).toBe(4);
  });
});
