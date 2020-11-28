const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { LoginPage } from "./LoginPage";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<LoginPage />);

    expect(getByLabelText("Login name:")).toBeInTheDocument();
    expect(getByLabelText("Password:")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("validates that loginName is filled in", async () => {
      const { getByText } = render(<LoginPage />);

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Login is required field"));
    });

    it("validates that loginName has just latin letters", async () => {
      const { getByText, getByLabelText } = render(<LoginPage />);

      fireEvent.input(getByLabelText("Login name:"), {
        target: { value: "765" },
      });

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Just latin letters"));
    });

    it("validates that password is filled in", async () => {
      const { getByText } = render(<LoginPage />);

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Password is required field"));
    });
  });
});
