export const formatAmountToCurrency = (value) => {
  return Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
  }).format(value);
};
