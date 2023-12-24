sap.ui.define([
    "com/project2/controller/BaseController",
	"sap/ui/core/Fragment"
],
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.project2.controller.View2", {
            oButtonId: null,
            onInit: function () {

            },
            goToView1: function () {
                var oApp = this.getAppObject();
                oApp.to("idView1");
            },
            onSuppliersValueHelpPress: function (oEvent) {
                this.oButtonId = oEvent.getSource().getId();
                var oView = this.getView();
                if (!this.SuppliersFilter) {
                    this.SuppliersFilter = Fragment.load({
                        id: oView.getId(),
                        name: "com.project2.view.Fragments.SupplierFilter",
                        controller: this
                    }).then(function (oDialog) {
                        oDialog.setModel(oView.getModel());
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }

                this.SuppliersFilter.then(function (oDialog) {
                    oDialog.bindAggregation("items",{
                        path:"/countries",
                        template: new sap.m.StandardListItem({
                            title:"{geonameid}"
                        })
                    });
                    oDialog.setTitle("Select the Id");
                    oDialog.attachConfirm(this.onGeoIdConfirm,this);
                    oDialog.open();
                }.bind(this));
            },
            onSuppliersFilterPress: function (oEvent) {
                this.oButtonId = oEvent.getSource().getId();
                var oView = this.getView();

                if (!this.SuppliersFilter) {
                    this.SuppliersFilter = Fragment.load({
                        id: oView.getId(),
                        name: "com.project2.view.Fragments.SupplierFilter",
                        controller: this
                    }).then(function (oDialog) {
                        oDialog.setModel(oView.getModel());
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }

                this.SuppliersFilter.then(function (oDialog) {
                    oDialog.bindAggregation("items",{
                        path:"/countries",
                        template: new sap.m.StandardListItem({
                            title:"{name}"
                        })
                    });
                    oDialog.setTitle("Select the city");
                    oDialog.attachConfirm(this.onCityConfirm,this);
                    oDialog.open();
                }.bind(this));
            },
            onCityConfirm: function(oEvent){
                var query = oEvent.getParameter("selectedItem").getTitle();
                var oFilter= new sap.ui.model.Filter("name", "EQ", query);
                this.getView().byId("idSuppTable").getBinding('items').filter([oFilter])
                
            },
            onClearSuppliersFilterPress: function(oEvent){
                this.getView().byId("idSuppTable").getBinding('items').filter([])
                
            },
            onGeoIdConfirm: function(oEvent){
                var selectedCity = oEvent.getParameter("selectedItem").getTitle();
                sap.ui.getCore().byId(this.oButtonId).setValue(selectedCity);
            },
            onSupplierRowPress:function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                var oView3 = this.getAppObject().getDetailPages()[2];
                oView3.bindElement(sPath);
                this.getAppObject().to("idView3")
            },
            goToView2: function () {
                var oApp = this.getAppObject();
                oApp.to("idView2");
            },
        });
    });
