sap.ui.define([
    "com/project2/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment"
],
    function (Controller, Filter, Fragment) {
        "use strict";

        return Controller.extend("com.project2.controller.View1", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            },
            goToView2: function () {
                var oApp = this.getAppObject();
                oApp.to("idView2");
            },
            onSearch: function (oEvent) {
                var query = oEvent.getParameter('query');
                var oFilter1 = new Filter("name", "Contains", query);
                var oFilter2 = new Filter("price", "Contains", query);
                var oFilter2 = new Filter("vitamin", "Contains", query);

                var oMultipleFilters = new Filter({
                    filters: [oFilter1, oFilter2, oFilter2],
                    and: false
                })
                var oList = this.getView().byId("idFruitList");
                oList.getBinding("items").filter([oMultipleFilters]);
            },
            handlePopoverPress: function (oEvent) {
                var oButton = oEvent.getSource(),
                    oView = this.getView();

                // create popover
                var that = this
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "com.project2.view.FilterFragment",
                        controller: that
                    }).then(function (oPopover) {
                        oView.addDependent(oPopover);
                        return oPopover;
                    });
                }
                this._pPopover.then(function (oPopover) {
                    oPopover.openBy(oButton);
                });
            },
            onFilterSelect: function (oEvent) {
                let value = oEvent.getParameters().listItem.getTitle();
                var oList = this.getView().byId("idFruitList");

                let oFilter;
                if (value == "<=50") {
                    oFilter = new Filter("price", "LE", 50);
                    oList.getBinding("items").filter([oFilter]);
                } else if (value == ">=80") {
                    oFilter = new Filter("price", "GE", 80);
                    oList.getBinding("items").filter([oFilter]);
                } else {
                    let oFilter1 = new Filter("price", "GE", 50);
                    let oFilter2 = new Filter("price", "LE", 80);

                    let mainFilter = new Filter({
                        filters: [oFilter1, oFilter2],
                        and: true
                    });
                    oList.getBinding("items").filter([mainFilter]);
                }
                this._pPopover.then(function (oPopover) {
                    oPopover.close(); 
                });
            },
            onClearFilters: function(){
                this.getView().byId("idFruitList").getBinding("items").filter([]);
            },
            onItemPress: function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                // var oView2 = this.getAppObject().getDetailPages()[1];
                // oView2.bindElement(sPath);
                // this.getAppObject().to("idView2")
                var fruitId = sPath.split('/')[sPath.split('/').length-1];
                this.oRouter.navTo("fruit",{
                    fruitId:fruitId
                });
                // this.goToView2();
            }
        });
    });
