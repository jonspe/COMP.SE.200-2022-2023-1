import compact from "./compact"

describe("Compact tests", () => {
  test("Example", () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
  })
  test("all falsey values nothing else", () => {
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([])
  })
  test("all falsey values and something else", () => {
    expect(compact([false, null, 0, "", undefined, NaN, 1])).toEqual([1])
  })
  test("all falsey values and more something else", () => {
    expect(compact([false, 2, null, 0, "", undefined, NaN, 1])).toEqual([2, 1])
  })
  
  test("string values and removed values", () => {
    expect(compact([false, "2", null, 0, "", undefined, NaN, "1"])).toEqual(["2", "1"])
  })
  test("string values only", () => {
    expect(compact(["2","1"])).toEqual(["2","1"])
  })
  test("no falsey values", () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3])
  })
  test("nothing", () => {
    expect(compact([])).toEqual([])
  })
  test("null string", () => {
    expect(compact(["null"])).toEqual(["null"])
  })
  test("function", () => {
    expect(compact([function(x) {return x}])).toEqual([function(x) {return x}])
  })
})
