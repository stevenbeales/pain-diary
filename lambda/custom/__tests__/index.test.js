const index = require("../index");

const questions = { 'a?': ['a'], 'b?': ['b'], 'c?': ['c'], 'd?': ['d'], 'e?': ['e'], 'f?': ['f'], 'g?': ['g'] };

test("populateeProQuestions [] to throw Error", () => {
  expect(() => {
    index.populateeProQuestions([])
  }).toThrow(Error);
});

test("populateeProQuestions[a, b, c, d, e, f, g] to return [a, b, c, d, e, f, g]", () => {
  expect(
    index.populateeProQuestions(questions)
  ).toEqual({ 'a?': ['a'], 'b?': ['b'], 'c?': ['c'], 'd?': ['d'], 'e?': ['e'], 'f?': ['f'], 'g?': ['g'] });
});

test("populateRoundAnswers", () => {
  expect(
    index.populateRoundAnswers(questions, 0, 0, questions)
  ).toEqual(['']);
});
