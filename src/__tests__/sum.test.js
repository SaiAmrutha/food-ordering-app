import { sum } from "../components/sum";

test("Sum func should calc the sum of 2 funs", () => {
  const result = sum(3, 4);
  //   assertion
  expect(result).toBe(7);
});
