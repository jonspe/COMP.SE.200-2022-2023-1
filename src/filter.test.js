import filter from "./filter.js"

describe("Filtering numbers from 0 to 9", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  it("should filter to keep numbers that are lower than 4", () => {
    expect(filter(numbers, (number) => number < 4)).toEqual(
      expect.arrayContaining([0, 1, 2, 3])
    )
  })

  it("should filter to keep only number 5", () => {
    expect(filter(numbers, (number) => number === 5)).toEqual([5])
  })

  it("should filter none of the numbers", () => {
    expect(filter(numbers, () => true)).toEqual(expect.arrayContaining(numbers))
  })

  it("should filter all the numbers", () => {
    expect(filter(numbers, () => false)).toEqual([])
  })
})
