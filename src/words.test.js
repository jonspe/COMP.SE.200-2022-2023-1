import words from "./words"

describe("One parameter", () => {
  it("should split string into words", () => {
    expect(words("fred, barney, & pebbles")).toStrictEqual([
      "fred",
      "barney",
      "pebbles",
    ])
  })
  it("should split multiple spaces string into words", () => {
    expect(words("fred,   barney, & pebbles")).toStrictEqual([
      "fred",
      "barney",
      "pebbles",
    ])
  })
  it("should split weird characters string into words", () => {  
    expect(words("fre#&//dö/&%%#, barney, & pebbles")).toStrictEqual([
      "fred",
      "dö",
      "barney",
      "pebbles",
    ])
  })
  it("should split numbers string into words", () => {    
    expect(words("fred2, barney5, 36 1pebbles")).toStrictEqual([
      "fred2",
      "barney5",
      "36",
      "1pebbles",
    ])
  })
})

describe("Two parameters", () => {
  it("should split string into words", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toStrictEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ])
  })

  it("should split string with no characters regex into words", () => {
    expect(words("fred, barney, & pebbles", /[]+/g)).toStrictEqual([
      "fred, barney, & pebbles",
    ])
  })
  it("should split string with weird regex into words", () => {
    expect(words("fred, barney, & pebbles", /[^,&]+/g)).toStrictEqual([
      "fred",
      " barney",
      " ",
      " pebbles",
    ])
  })
})
