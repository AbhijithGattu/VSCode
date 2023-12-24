sap.ui.define([
    "com/project2/controller/BaseController",
	"sap/ui/core/Fragment"
],
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.project2.controller.View2", {
            onInit: function () {

            },
            goToView2: function () {
                var oApp = this.getAppObject();
                oApp.to("idView2");
            }
        });
    });
