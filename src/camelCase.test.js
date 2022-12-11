import camelCase from "./camelCase.js"

describe("Remove punctuation marks", () => {
  it("should remove underscores", () => {
    expect(camelCase("__Lorem__ipsum_dolor____sit___amet_")).toBe(
      "loremIpsumDolorSitAmet"
    )
  })

  it("should remove hyphens", () => {
    expect(camelCase("--Lorem-ipsum---dolor--sit--------amet----")).toBe(
      "loremIpsumDolorSitAmet"
    )
  })

  it("should remove spaces", () => {
    expect(camelCase("  Lorem  ipsum dolor  sit     amet  ")).toBe(
      "loremIpsumDolorSitAmet"
    )
  })
})

describe("Test the alphabet", () => {
  it("should convert the whole English alphabet", () => {
    expect(camelCase("The quick brown fox jumps over the lazy dog")).toBe(
      "theQuickBrownFoxJumpsOverTheLazyDog"
    )
  })

  it("should convert umlauts", () => {
    expect(camelCase("Äänekäs ääliö ölisee Zürichissa übach")).toBe(
      "äänekäsÄäliöÖliseeZürichissaÜbach"
    )
  })

  it("should handle numbers correctly", () => {
    expect(camelCase("Lorem ipsum 483 dolor23sit7amet")).toBe(
      "loremIpsum483Dolor23Sit7Amet"
    )
  })

  it("should convert mixmatched capital letters correctly", () => {
    expect(camelCase("LOreM iPsuM DoLOR siT amET")).toBe(
      "loremIpsumDolorSitAmet"
    )
  })
})
