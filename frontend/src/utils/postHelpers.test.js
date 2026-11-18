
import { describe, it, expect } from "vitest";

import {
  validatePostContent,
  getInitials,
  formatPostDate,
} from "./postHelpers.js";

describe("CommunityHub post helper functions", () => {
  it("should reject an empty post", () => {
    expect(validatePostContent("")).toBe(false);
    expect(validatePostContent("   ")).toBe(false);
  });

  it("should accept a post containing text", () => {
    expect(validatePostContent("Hello CommunityHub!")).toBe(true);
  });

  it("should return the initials of a person's name", () => {
    expect(getInitials("Wycliffe Kariuki")).toBe("WK");
  });

  it("should format a post date correctly", () => {
    expect(formatPostDate("2026-11-18T10:00:00Z"))
      .toBe("18 Nov 2026");
  });
});
