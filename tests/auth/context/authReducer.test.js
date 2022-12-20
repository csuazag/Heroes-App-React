import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Test on authReducer", () => {
  test("should return the state by default", () => {
    const newState = authReducer({ logged: false }, {});
    expect(newState).toEqual({ logged: false });
  });

  test("should call the login action and stablish the new user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Camilo Suaza",
        id: 123,
      },
    };

    const newState = authReducer({ logged: false }, action);
    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should call the logout action and delete the previous user", () => {
    const action = {
      type: types.logout,
    };

    const newState = authReducer({ logged: true }, action);
    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeUndefined();
  });
});
