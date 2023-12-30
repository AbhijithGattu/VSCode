sap.ui.define([
    "com/project2/controller/BaseController",
    "sap/ui/core/Fragment"
],
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.project2.controller.View3", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oRouter.getRoute("Supplier").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched(oEvent) {
                var sPath = "/countries/" + oEvent.getParameter('arguments').supplierId;
                this.getView().bindElement({
                    path: sPath
                });
                // oEvent.getParameter('views')[0].byId('idFruitList').setSelectedItem(oEvent.getParameter('views')[0].byId('idFruitList').getItems()[oEvent.getParameter('arguments').fruitId])
            },
            goToView2: function () {
                var sPreviousHash = sap.ui.core.routing.History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				// There is no history!
				// Naviate to master page
				this.getOwnerComponent().getRouter().navTo("Master");
			}
            }
        });
    });
