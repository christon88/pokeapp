import { capitalize } from "./strings";
import { expect, test } from "../../test/assertions";

test("Capitalize", () => {
  expect(capitalize("foo")).toEqual("Foo");
  expect(capitalize("foO")).toEqual("FoO");
  expect(capitalize("Foo")).toEqual("Foo");
  expect(capitalize("123")).toEqual("123");
});
