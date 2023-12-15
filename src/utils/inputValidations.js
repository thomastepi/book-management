function isValidInput(input) {
  const trimmedInput = input.trim();
  return trimmedInput !== "";
}

const isValidPrice = (value) => {
  const floatValue = parseFloat(value);
  if (!isNaN(floatValue) && floatValue >= 0) {
    const decimalCount = (floatValue.toString().split(".")[1] || "").length;
    return decimalCount <= 2;
  }
  return false;
};

const isValidISBN = (isbn) => {
  return /^\d+$/.test(isbn);
};

const isValidBookNumber = (BookNum) => {
    return /^\d+$/.test(BookNum);
  };

export { isValidInput, isValidPrice, isValidISBN, isValidBookNumber };
