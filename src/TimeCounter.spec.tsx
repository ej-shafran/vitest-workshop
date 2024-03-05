import { cleanup, render } from "@testing-library/react";
import dayjs from "dayjs";
import fc from "fast-check";
import { describe, it, expect } from "vitest";

import TimeCounter from "./TimeCounter";

const max59Arb = fc.nat({ max: 59 });
const underHourDurationArb = fc
  .record({ seconds: max59Arb, minutes: max59Arb })
  .map(dayjs.duration);
const overHourDurationArb = fc
  .record({
    seconds: max59Arb,
    minutes: max59Arb,
    hours: fc.integer({ min: 1 }),
  })
  .map(dayjs.duration);

describe("TimeCounter", () => {
  it("should show mm:ss if under 1hr", () => {
    const property = fc.property(underHourDurationArb, (duration) => {
      const emergencyStart = dayjs().subtract(duration);

      const screen = render(<TimeCounter emergencyStart={emergencyStart} />);

      const timeCounter = screen.getByTestId("time-counter");
      expect(timeCounter).toBeInTheDocument();
      expect(timeCounter.textContent).toBeTruthy();

      const [minutes, seconds] = timeCounter.textContent!.split(":");
      expect(parseInt(minutes)).toBe(duration.minutes());
      expect(parseInt(seconds)).toBe(duration.seconds());
    });

    fc.assert(property.beforeEach(cleanup));
  });

  it("should show HH:mm:ss if over 1hr", () => {
    const property = fc.property(overHourDurationArb, (duration) => {
      const emergencyStart = dayjs().subtract(duration);

      const screen = render(<TimeCounter emergencyStart={emergencyStart} />);

      const timeCounter = screen.getByTestId("time-counter");
      expect(timeCounter).toBeInTheDocument();
      expect(timeCounter.textContent).toBeTruthy();

      const [hours, minutes, seconds] = timeCounter.textContent!.split(":");
      expect(parseInt(hours)).toBe(duration.hours());
      expect(parseInt(minutes)).toBe(duration.minutes());
      expect(parseInt(seconds)).toBe(duration.seconds());
    });

    fc.assert(property.beforeEach(cleanup));
  });
});
