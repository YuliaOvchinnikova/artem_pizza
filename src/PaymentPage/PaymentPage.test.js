const { render, fireEvent } = require("@testing-library/react");
import { PaymentPage } from "./PaymentPage";

describe("PaymentPage", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<PaymentPage />);

    expect(getByLabelText("Card Number:")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  describe("on card number change", () => {
    it("breaks the card number into groups of four characters", () => {
      const { getByLabelText } = render(<PaymentPage />);

      const cardInput = getByLabelText("Card Number:");
      fireEvent.input(cardInput, { target: { value: "1234123412341234" } });

      expect(cardInput.value).toEqual("1234 1234 1234 1234");
    });

    it("limits the card number by 19 characters", () => {
      const { getByLabelText } = render(<PaymentPage />);

      const cardInput = getByLabelText("Card Number:");
      fireEvent.input(cardInput, { target: { value: "1234123412341234123" } });

      expect(cardInput.value).toEqual("1234 1234 1234 1234");
    });
  });
});
