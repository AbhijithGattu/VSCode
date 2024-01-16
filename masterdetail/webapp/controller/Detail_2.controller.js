sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, BusyIndicator) {
        "use strict";

        return BaseController.extend("masterdetail.controller.Detail_2", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oRouter.getRoute("toDetail2").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched(oEvent) {
                this.getView().byId("form").setBusy(true);
                this.productId = oEvent.getParameter('arguments').productId;
                this.orderId = oEvent.getParameter('arguments').orderId;
                var oModel = this.getOwnerComponent().getModel();
                oModel.read(`/Products(${this.productId})`, {
                    success: function (oData) {
                        this.getView().byId("form").setModel(new JSONModel(oData));
                        this.getView().byId("form").setBusy(false);
                    }.bind(this),
                    error: function (oError) {
                        console.log(oError);
                    }.bind(this)
                });
            },
            onNavButtonPress:function(oEvent){
                this.oRouter.navTo("toDetail1",{
                    orderId:this.orderId
                });
            }
        });
    });
