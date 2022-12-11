import chunk from "./chunk.js"

describe("Negative tests", () => {
  it("should convert empty array", () => {
    expect(chunk([])).toStrictEqual([])
  })

  it("should not convert array into size 0 chunks", () => {
    expect(chunk(["a", "b", "c"], 0)).toStrictEqual([])
  })
})

describe("Happy case tests", () => {
  it("should convert array of 4 into chunks of 2", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
      ["a", "b"],
      ["c", "d"],
    ])
  })

  it("should convert array of 9 into chunks of 3", () => {
    expect(
      chunk(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 3)
    ).toStrictEqual([
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ])
  })

  it("should convert array of 7 into chunks of 3", () => {
    expect(chunk(["a", "b", "c", "d", "e", "f", "g"], 3)).toStrictEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g"],
    ])
  })

  it("should convert array of 5 into chunks of 2", () => {
    expect(chunk(["1", "2", "3", "4", "5"], 2)).toStrictEqual([
      ["1", "2"],
      ["3", "4"],
      ["5"],
    ])
  })

  it("should convert array of 3 into chunks of 1", () => {
    expect(chunk(["a", "b", "c"], 1)).toStrictEqual([["a"], ["b"], ["c"]])
  })

  it("should convert array of 3 into chunks of 5", () => {
    expect(chunk(["a", "b", "c"], 5)).toStrictEqual([["a", "b", "c"]])
  })
})
