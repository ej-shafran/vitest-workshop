import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import fc from "fast-check";
import { beforeEach, expect } from "vitest";

expect.extend(matchers);
beforeEach(cleanup);
fc.configureGlobal({
    beforeEach: cleanup,
});
