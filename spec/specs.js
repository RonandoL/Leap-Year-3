describe('leapYear', function(){
  it("will be false for a year that is NOT divisible by 4, 100, or 400", function(){
    expect(leapYear(1993)).to.equal(false);
  });

  it("will be true for years divisible by 4", function(){
    expect(leapYear(2004)).to.equal(true);
  });

  it("will be false for years divisible by 100", function(){
    expect(leapYear(1900)).to.equal(false);
  });

  it("will be true for years divisible by 400", function(){
    expect(leapYear(2000)).to.equal(true);
  });

});
