import { describe, expect, test, it } from "vitest";

import { add } from "./add";

function check(a: number, b: number, result: number) {
  test(`${a} + ${b} = ${result}`, () => {
    expect(add(a, b)).toBe(result);
  });
}

describe("add", () => {
  check(2, 2, 4);
  check(1, 3, 4);
  check(5, 3, 8);
  check(27, -3, 24);
  check(3, 2, 5);
});
