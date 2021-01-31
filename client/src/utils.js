export const getCardType = (firstCharacter) => {
  if (firstCharacter === "4") {
    return "Visa";
  } else if (firstCharacter === "5") {
    return "MasterCard";
  }
  return "";
};
