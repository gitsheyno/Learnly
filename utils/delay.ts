export const delay = (max = 2500) => {
  // const randomDelayTime = Math.floor(Math.random() * (max - 500 + 1))
  const randomDelayTime = 9000;
  return new Promise((resolve) => setTimeout(resolve, 4000));
};
