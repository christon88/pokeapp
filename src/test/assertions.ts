export const test = async (title: string, callback: () => void) => {
  try {
    callback();
    console.log(title);
  } catch (error) {
    console.error(title);
    console.error(error);
  }
};

export const expect = <T>(actual: T) => {
  return {
    toEqual: (expected: T) => {
      if (actual !== expected) {
        throw new Error(
          `${JSON.stringify(actual)} is not equal to ${JSON.stringify(
            expected
          )}`
        );
      }
    },
  };
};
