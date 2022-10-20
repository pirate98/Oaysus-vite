// Return Incentive1_xx from Incentive
export const numerateTheName = (
  pageComponents: Record<any, any>[],
  name = ""
) => {
  const biggestNumeratorFromNames = pageComponents.reduce((prev, cur) => {
    if (!cur?.id?.includes(name)) return prev;
    const nameNumerator = parseInt(cur?.id?.split("_")[1]);
    return nameNumerator > prev ? nameNumerator : prev;
  }, 0);

  // console.log({ biggestNumeratorFromNames });
  return name + "_" + (biggestNumeratorFromNames + 1);
};
