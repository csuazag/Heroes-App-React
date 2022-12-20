import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Test on <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Camilo",
      id: 123,
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show the username already logged in", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Camilo")).toBeTruthy();
  });

  test('should call the logout function and navigate when the btn "Logout" is clicked', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const $logoutBtn = screen.getByRole("button");
    fireEvent.click($logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
