sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("com.project1.controller.View1", {
            onInit: function () {

            },
            onSubmit: function(){
                
                // var photo=new sap.m.Image("image2", {
                //     height: "200px",
                //     width:"200px",
                //     src : "https://cdn.gulte.com/wp-content/uploads/2021/02/Brahmi.jpg"
                // });
                // photo.placeAt(this.getView().byId("page").getId());
                // MessageToast.show("Nen cheppanu dengai");
            // create dialog lazily
            if(!this.pDialog){
				this.pDialog = this.loadFragment({
					name: "com.project1.view.Fragments.brahmi"
				})};

			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
            },
            onCloseDialog: function(){
                this.pDialog.then(function(oDialog) {
                    oDialog.close();
                });
            }
        });
    });
