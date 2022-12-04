import camelCase from "./camelCase.js"

test("Convert the whole alphabet", () => {
  expect(camelCase("The quick brown fox jumps over the lazy dog")).toBe(
    "theQuickBrownFoxJumpsOverTheLazyDog"
  )
})
