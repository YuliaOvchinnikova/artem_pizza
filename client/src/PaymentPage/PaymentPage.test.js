const { render, fireEvent } = require("@testing-library/react");
import { PaymentPage, normalizeCardNumber, getCardType } from "./PaymentPage";

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

describe("normalizeCardNumber", () => {
  it("handles undefined input correctly", () => {
    expect(normalizeCardNumber(undefined)).toEqual("");
  });

  it("handles number input correctly", () => {
    expect(normalizeCardNumber(42)).toEqual("");
  });

  it("handles number as string input correctly", () => {
    expect(normalizeCardNumber("55555")).toEqual("5555 5");
  });

  it("handles character string input correctly", () => {
    expect(normalizeCardNumber("somethingsomething")).toEqual("");
  });

  it("handles valid card number as string input correctly", () => {
    expect(normalizeCardNumber("1234123412341234")).toEqual(
      "1234 1234 1234 1234"
    );
  });
});

describe("getCardType", () => {
  it("checks VISA correctly", () => {
    expect(getCardType("4")).toEqual("Visa");
  });

  it("checks Mastercard correctly", () => {
    expect(getCardType("5")).toEqual("MasterCard");
  });

  it("checks random input correctly", () => {
    expect(getCardType("smth")).toEqual("");
    expect(getCardType("9")).toEqual("");
  });
});
