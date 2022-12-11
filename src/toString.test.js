import toString from "./toString.js"

describe("Test toString different value types", () => {
  it("should convert bool to string", () => {
    expect(toString(true)).toBe("true")
    expect(toString(false)).toBe("false")
  })

  it("should convert number to string", () => {
    expect(toString(442)).toBe("442")
    expect(toString(7.2316)).toBe("7.2316")
  })

  it("should convert array to string", () => {
    expect(toString([true, 123, "yeet"])).toBe("true,123,yeet")
  })

  it("should not change string", () => {
    const str = "Lorem ipsum dolor sit amet 34234 ÜÄÖ-.;:"
    expect(toString(str)).toBe(str)
  })

  it("should convert null to null string", () => {
    expect(toString(null)).toBe("null")
  })

  it("should convert undefined to undefined string", () => {
    expect(toString(undefined)).toBe("undefined")
  })

  it("should convert object to string", () => {
    expect(toString({ a: 1, b: 2 })).toBe("[object Object]")
  })

  it("should convert symbol to string", () => {
    expect(toString(Symbol("yeet"))).toBe("Symbol(yeet)")
  })

  it("should convert -0 to -0 string", () => {
    expect(toString(-0)).toBe("-0")
  })

  it("should convert 0 to 0 string", () => {
    expect(toString(0)).toBe("0")
  })

  it("should convert -Infinity to -Infinity string", () => {
    expect(toString(-Infinity)).toBe("-Infinity")
  })

  it("should convert Infinity to Infinity string", () => {
    expect(toString(Infinity)).toBe("Infinity")
  })

  it("should convert NaN to NaN string", () => {
    expect(toString(NaN)).toBe("NaN")
  })

  it("should convert function to string", () => {
    expect(toString(() => {})).toBe("() => {}")
  })

  it("should convert regexp to string", () => {
    expect(toString(/yeet/)).toBe("/yeet/")
  })

  it("should convert map to string", () => {
    expect(toString(new Map())).toBe("[object Map]")
  })

  it("should convert set to string", () => {
    expect(toString(new Set())).toBe("[object Set]")
  })

  it("should convert weakmap to string", () => {
    expect(toString(new WeakMap())).toBe("[object WeakMap]")
  })
})
