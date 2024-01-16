sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,JSONModel,BusyIndicator) {
        "use strict";

        return BaseController.extend("masterdetail.controller.Detail_1", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    this.oRouter.getRoute("toDetail1").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched(oEvent) {
                // BusyIndicator.show();
                this.getView().byId("orderDetailsTable").setBusy(true);
                this.orderId = oEvent.getParameter('arguments').orderId;

                var oModel = this.getOwnerComponent().getModel();
                oModel.read(`/Orders(${this.orderId})/Order_Details`, {
                    success: function(oData) {
                        this.getView().byId("orderDetailsTable").setBusy(false);
                        // BusyIndicator.hide();
                        this.getView().byId("orderDetailsTable").setModel(new JSONModel(oData.results),"orderDetailsModel");
                    }.bind(this),
                    error: function(oError) {
                        this.getView().byId("orderDetailsTable").setBusy(false);
                        // BusyIndicator.hide();
                        console.log(oError);
                    }.bind(this)
                 });
            },
            onOrderDetailSelect:function(oEvent){
                var productId = oEvent.getParameter("listItem").getBindingContext('orderDetailsModel').getProperty('ProductID');
                this.oRouter.navTo("toDetail2",{
                    productId:productId,
                    orderId:this.orderId
                });
            },
            onNavButtonPress:function(oEvent){
                this.oRouter.navTo("RouteMaster");
            }
        });
    });
