import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TimeCounter from "./TimeCounter";
import dayjs from "dayjs";

describe("TimeCounter", () => {
  it("should show 1:00 after a minute", async () => {
    const screen = render(
      <TimeCounter
        emergencyStart={dayjs().subtract(dayjs.duration({ minutes: 1 }))}
      />,
    );

    expect(screen.getByTestId("time-counter")).toHaveTextContent("1:00")
  });
});
