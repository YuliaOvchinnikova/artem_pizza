const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { RegistrationPage } from "./RegistrationPage";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<RegistrationPage />);

    expect(getByLabelText("Login name:")).toBeInTheDocument();
    expect(getByLabelText("Password:")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("validates that loginName is filled in", async () => {
      const { getByText } = render(<RegistrationPage />);

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Login is required field"));
    });

    it("validates that loginName has just latin letters", async () => {
      const { getByText, getByLabelText } = render(<RegistrationPage />);

      fireEvent.input(getByLabelText("Login name:"), {
        target: { value: "765" },
      });

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Just latin letters"));
    });

    it("validates that password is filled in", async () => {
      const { getByText } = render(<RegistrationPage />);

      await act(async () => {
        fireEvent.click(getByText("Submit"));
      });
      expect(getByText("Password is required field"));
    });
  });
});
