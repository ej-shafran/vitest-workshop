import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { canDrink } from "./can-drink";

const ageArb = fc.nat({ max: 30 });

describe("canDrink", () => {
  it("should only allow adults to drink", () => {
    const property = fc.property(ageArb, (age) => {
      expect(canDrink(age)).toBe(age >= 18);
    })

    fc.assert(property);
  });
});
