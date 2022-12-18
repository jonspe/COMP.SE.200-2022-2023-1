import isDate from "./isDate"


describe("Basic isDate tests", () => {
  test("nothing", () => {
    expect(isDate()).toEqual(false)
  })
  test("example 1", () => {
    expect(isDate(new Date)).toEqual(true)
  })
  test("example 2", () => {
    expect(isDate('Mon April 23 2012')).toEqual(false)
  })
  test("null", () => {
    expect(isDate(null)).toEqual(false)
  })
  test("random date", () => {
    expect(isDate(new Date('December 17, 1995 03:24:00'))).toEqual(true)
  })
  test("min date", () => {
    expect(isDate(new Date(-8640000000000000))).toEqual(true)
  })
  test("max date", () => {
    expect(isDate(new Date(8640000000000000))).toEqual(true)
  })
  test("invalid date", () => {
    expect(isDate(new Date(NaN))).toEqual(false)
  })
  test("date string 2", () => {
    expect(isDate("Mon, 25 Dec 1995 13:30:00 GMT")).toEqual(false)
  })
})
