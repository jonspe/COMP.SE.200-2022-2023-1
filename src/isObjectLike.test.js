import isObjectLike from "./isObjectLike"

describe("isObjectLike cases", () => {
  test("example case 1", () => {
    expect(isObjectLike({})).toEqual(true)
  })

  test("example case 2", () => {
    expect(isObjectLike([1, 2, 3])).toEqual(true)
  })
  
  test("example case 3", () => {
    expect(isObjectLike(x => x)).toEqual(false)
  })

  test("example case 4", () => {
    expect(isObjectLike(null)).toEqual(false)
  })
  
  test("function", () => {
    expect(isObjectLike(function(x) {return x})).toEqual(false)
  })
  test("string", () => {
    expect(isObjectLike("objectasd")).toEqual(false)
  }) 
  test("objectstring", () => {
    expect(isObjectLike("object")).toEqual(false)
  })
  test("undefined", () => {
    expect(isObjectLike(undefined)).toEqual(false)
  })
  // based on documentation this should be false
  test("function object", () => {
    expect(isObjectLike(new Function())).toEqual(false)
  })
  test("object object", () => {
    expect(isObjectLike(new Object())).toEqual(true)
  })
  test("array object", () => {
    expect(isObjectLike(new Array())).toEqual(true)
  })
  test("date object", () => {
    expect(isObjectLike(new Date())).toEqual(true)
  })
  test("regexp object", () => {
    expect(isObjectLike(new RegExp())).toEqual(true)
  })
  test("error object", () => {
    expect(isObjectLike(new Error())).toEqual(true)
  })
  test("map object", () => {
    expect(isObjectLike(new Map())).toEqual(true)
  })
})
