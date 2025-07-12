sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.sap.project1.controller.ProductsIconTabBar", {
        onNavToHome:function(){
            sap.ui.core.UIComponent.getRouterFor(this).navTo("RouteHome");
        },
		onProductTableUpdate: function () {
			const oBindings = this.getView().byId("productsTable").getBinding("items");
			const title = this.getView().getModel("i18n").getProperty("worklistTableTitle");
			this.getView().byId("tableHeader").setText(`${title}(${oBindings.getLength()})`);
		},
		onSearch: function (oEvent) {
			const query = oEvent.getParameter("newValue");
			const oFilter = new Filter({
				path: "ProductName",
				operator: FilterOperator.Contains,
				value1: query,
				caseSensitive: false
			})
			this.getView().byId("productsTable").getBinding("items").filter(oFilter);
		},
		onIconTabBarSelect: function (oEvent) {
			const key = oEvent.getParameter("selectedKey");
			let oValue1, oValue2, operator;
			switch (true) {
				case key === "inStock":
					oValue1 = 0;
					operator = FilterOperator.GT;
					break;
				case key === "shortage":
					oValue1 = 0;
					oValue2 = 30
					operator = FilterOperator.BT;
					break;
				case key === "outOfStock":
					oValue1 = 0;
					operator = FilterOperator.EQ;
					break;
				default:
					this.getView().byId("productsTable").getBinding("items").filter(null);
					return;
			}

			const oFilter = new Filter({
				path: "UnitsInStock",
				operator: operator,
				value1: oValue1,
				value2: oValue2
			})
			this.getView().byId("productsTable").getBinding("items").filter(oFilter);
		}
	});

});