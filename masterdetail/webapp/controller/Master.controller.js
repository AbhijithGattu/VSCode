sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,JSONModel) {
        "use strict";

        return BaseController.extend("masterdetail.controller.Master", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            },
            onMasterItemSelect: function(oEvent){
                var orderId = oEvent.getParameter('listItem').getBindingContext().getProperty('OrderID');
                this.oRouter.navTo("toDetail1",{
                    orderId:orderId
                });
            }
        });
    });
