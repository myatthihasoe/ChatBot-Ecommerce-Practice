import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("formats 8080 cents to $80.80 correctly", () => {
    expect(formatMoney(8080)).toBe("$80.80");
  });

  it("displays 2 decimal places ", () => {
    expect(formatMoney(5000)).toBe("$50.00");
    expect(formatMoney(100)).toBe("$1.00");
  });
});
