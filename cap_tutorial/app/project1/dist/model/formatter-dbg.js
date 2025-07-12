
sap.ui.define([], function () {
	"use strict";

	return {
		quantityState: function (value) {
			let state = "None";
			value = parseInt(value);
			switch (true) {
				case value < 30:
					state = "Warning";
					break;
				case value > 30:
					state = "Success";
					break;
				case value = 0:
					state = "Error";
					break;
				default:
					break;
			}
			return state;
		}
	};

});
