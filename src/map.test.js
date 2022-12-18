import map from "./map.js"

describe("Happy cases", () => {
  test("should work like told", () => {
    expect(map([4,8], x => Math.pow(x,2))).toEqual([16,64])
  })
  test("should return always zero", () => {
    expect(map([4,8], function(x){return 0})).toEqual([0,0])
  })
  test("should add numbers correctly", () => {
    expect(map([4,8], function(x){return x+2})).toEqual([6,10])
  }) 
  test("should subtract numbers correctly", () => {
    expect(map([4,8], function(x){return x-8})).toEqual([-4,0])
  })
  test("should it be working for strings?", () => {
    expect(map(["4","8"], function(x){return x + "8"})).toEqual(["48","88"])
  })
  test("should it be working for strings?", () => {
    expect(map(["4","8"], function(x){return x + "8"})).toEqual(["48","88"])
  })
  test("should perform sqrt correctly", () => {
    expect(map([4,16], function(x){return Math.sqrt(x)})).toEqual([2,4])
  })
  test("should the example work?", () => {
    expect(map([4,8], function(x){return x*x})).toEqual([16,64])
  })
  test("multi type array", () => {
    expect(map([4,"16"], function(x){
      if (typeof x === "string") return x + "8"
      else return x
    })).toEqual([4,"168"])
  })
  test("empty array", () => {
    expect(map([], function(x){return x})).toEqual([])
  })
})

describe("negative cases", () => {
  test("dividing by zero", () => {
    expect(map([4,16], function(x){
      if (x < 10) return x
      else return x/0
    })).toEqual([4,Infinity])
  })
  
  test("throw error", () => {
    expect(map([4,16], function(x){
      if (x < 10) return x
      else throw new Error('error')
    })).toThrow('error')
  })
  
  test("null and undefined", () => {
    expect(map([1,2,3,4], function(x){
      if (x < 2) return null
      return undefined
    })).toEqual([null,undefined,undefined,undefined])
  })
})
