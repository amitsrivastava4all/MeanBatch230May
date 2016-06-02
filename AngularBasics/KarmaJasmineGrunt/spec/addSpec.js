// Here We are Creating TestSuite
describe("AddTestSuite", function() {

    // Test Case
  it("should be add two numbers", function() {
      var expectedResult = 30;
      var result = add(10,20);
      expect(result).toBe(expectedResult);
  });
     it("should be add two string numbers", function() {
      var expectedResult = 30;
      var result = add("10","20");
      expect(result).toBe(expectedResult);
  });
});
     