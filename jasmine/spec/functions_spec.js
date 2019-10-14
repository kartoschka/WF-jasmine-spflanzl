describe("fuel calc", ()=>{
  var f = km_and_ltr_to_ltrper100km
  it("returns some simple expected results", ()=>{
    expect(f(100,10)).toEqual(10)
    expect(f(100,5)).toEqual(5)
    expect(f(500,20)).toEqual(4)
  })
})

describe("truncate str", ()=>{
  var f = truncate_string
  var teststr1 = "I don't know what to do with myself"
  var teststr2 = "   Is   this     the real life  ?   "
  it("returns its input if truncate arg is 0", ()=>{
    expect(f(teststr1,0)).toEqual(teststr1)
  })
  it("respects whitespace", ()=>{
    expect(f(teststr2,0)).toEqual(teststr2)
  })
  it("truncates correctly by 7 chars", ()=>{
    var len = 7
    expect(f("hello you suck a duck", len)).toEqual("hello you suck")
    expect(f("  I WANt to BELIEVE  ", len)).toEqual("  I WANt to BE")
    expect(f("this   is unacceptable", len)).toEqual("this   is unacc")
  })
  it("truncates string shorter than trunclength to empty str", ()=>{
    expect(f("what is love?",20)).toEqual("")
  })
})

describe("get highest number from array", ()=>{
  var f = highest_value
  it("returns undefined for an empty array", ()=>{
    expect(f([])).toBeUndefined()
  })
  it("produces some expected results", ()=>{
    expect(f([3,1,0,-4,10,4])).toEqual(10)
    expect(f([400,-400,400,401,401,-20000000000000,-400000000000000])).toEqual(401)
    expect(f([-999999999,-999999999.9,-1000000000,-1000000000000])).toEqual(-999999999)
  })
})
