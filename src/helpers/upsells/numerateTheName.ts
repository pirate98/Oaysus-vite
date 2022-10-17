// Return Incentive1_xx from Incentive
export const numerateTheName = (pageComponents = [{ name: "" }], name = "") => {
  const biggestNumeratorFromNames = pageComponents.reduce((prev, cur) => {
    if (!cur.name.includes(name)) return prev;
    const nameNumerator = parseInt(cur.name.split("_")[1]);
    return nameNumerator > prev ? nameNumerator : prev;
  }, 0);

  // console.log({ biggestNumeratorFromNames });
  return name + "_" + (biggestNumeratorFromNames + 1);
};
