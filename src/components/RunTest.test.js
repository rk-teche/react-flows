import { RunTest } from "./RunTest";

//https://jestjs.io/docs/using-matchers
test("multiply by two", () => {
    expect(RunTest(2)).toBe(4);
})