console.log("It works.");

var milesConvert = {
	miles : 3,
	feetPerMile : 5280,
	milesToFeet : function(miles){"use strict";
		return this.miles * this.feetPerMile;
	}
};



console.log("Miles in feet" + " " + milesConvert.milesToFeet());
