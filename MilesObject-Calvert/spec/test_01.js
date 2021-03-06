describe("Miles Object", function() {
	

	it("expect milesConvert milesToFeet to be 15840", function() {
		expect(milesConvert.milesToFeet(3)).toBe(15840);
	});

	it("expect milesConvert miles to be 3", function() {
		expect(milesConvert.miles).toBe(3);
	});

	it("expect milesConvert feet per mile to be 5280", function() {
		expect(milesConvert.feetPerMile).toBe(5280);
	});

});
