import { types } from "../../../src/auth/types/types";

describe("Test on Types", () => {
  test("should return  these types", () => {
    expect(types).toEqual({ login: "[AUTH] Login", logout: "[AUTH] Logout" });
  });
});
