export const assertExhaustive = (thing: never): never => {
  throw new Error(
    `Non exhaustive pattern. Object contains ${JSON.stringify(thing)}`
  );
};
