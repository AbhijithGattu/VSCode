sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("practice1.controller.View1", {
            onInit: function () {

            },
            onMoreInfoPress: function (oEvent) {
                var path = oEvent.getSource().getBindingContext().getPath();
                var oButton = oEvent.getSource(),
                    oView = this.getView();
                var that = this
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "practice1.view.fragments.MoreInfo",
                        controller: that
                    }).then(function (oPopover) {
                        oView.addDependent(oPopover);
                        return oPopover;
                    });
                }
                this._pPopover.then(function (oPopover) {
                    oPopover.bindElement(path);
                    oPopover.openBy(oButton);
                });
            },
            formatAddress: function (...args) {
                const[Address,City,Country,Phone,PostalCode] = args
                if (Address && City && Country && Phone) {
                    return Address + "\n" + City + "\n" + Country + "\n" + Phone + "\n" + PostalCode;
                }
            },
            visibleStatus:function(unitPrice){
                if(unitPrice && unitPrice < 30){
                    return true
                }
                else{
                    return false
                }
            },
            visibleStatus1:function(unitPrice){
                if(unitPrice &&unitPrice >= 30){
                    return true
                }
                else{
                    return false
                }
            }
        });
    });
