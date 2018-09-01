describe("whatCanIDrink function", function(){
    // A test suite begins with a call to the global Jasime function desribe with two parameters : a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
       //Specs are defined by calling the global Jasmine function it
       it("should exist", function(){
        // Expectations are built with the function expect which take a value, called the actual.
        // Each matcher implements a boolean comparison between the actual value and the expected value
        // Any matcher can evakluate to a negative assertion by chaining the call to expect with not before calling the matcher.
        expect(whatCanIDrink).toBeDefined();
       });
       
       it("should return drink toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(13);
        expect(result).toBe("Drink Toddy");
       });
       
       it("should return drink coke when called as whatCanIDrink(17)", function(){
         var result = whatCanIDrink(17);
         expect(result).toBe("Drink Coke");
       });
       
       it("should return drink beer when called as whatCanIDrink(18)", function() {
          var result = whatCanIDrink(18);
          expect(result).toBe("Drink Beer");
       });
       
       it("should return drink whisky when called as whatCanIDrink(130)", function() {
          var result = whatCanIDrink(130);
          expect(result).toBe("Drink Whisky");
       });
       
       it("should be unable to return a drink when called whatCanIDrink(140)", function(){
           var result = whatCanIDrink(140);
           expect(result).toBe("Sorry . I can't tell what drink because that age is incorrect");
       });
       
       it("should contain Drink when called as whatCanIDrink(17)", function(){
           var result = whatCanIDrink(10).indexOf("Drink");
           expect(result).not.toEqual(-1);
       });
       
    });
});












