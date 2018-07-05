const populateeProQuestions = require("../index");

test("populateeProQuestions [] to throw Error", () => {
  expect(() => {
    populateeProQuestions([])
  }).toThrow(Error);
});

test("populateeProQuestions[a, b, c, d, e, f, g] to return [a, b, c, d, e, f, g]", () => {
  expect(
    populateeProQuestions(["a", "b", "c", "d", "e", "f", "g"])
  ).toEqual(["a", "b", "c", "d", "e", "f", "g"]);
});
