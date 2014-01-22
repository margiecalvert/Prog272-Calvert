describe("A suite", function() {
 /* it("expect to get nine", function() {
    expect(getNine()).toBe(9);
  });
  
  it("expect to get eight", function() {
    expect(getEight()).toBe(8);
  });*/
  
  it("expect numberGetter getEight to get 8", function() {
  	expect (numberGetter.getEight()).toBe(8);
  });
  
  it("expect numberGetter getNine to get 9", function() {
  	expect (numberGetter.getNine()).toBe(9);
  });
});