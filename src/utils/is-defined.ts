export const isDefined = <T>(thing: T): thing is NonNullable<T> =>
  thing !== undefined && thing !== null;
