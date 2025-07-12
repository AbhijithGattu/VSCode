sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.sap.project1.controller.Home", {
		onInit:function () {
			this.oRouter = UIComponent.getRouterFor(this);
		},
		onGoToProductsWorklist:function () {
			this.oRouter.navTo("ProductsWorklist");
		},
		onGoToProductsIconTabbar:function () {
			this.oRouter.navTo("ProductsIconTabbar");
		}
		
	});

});