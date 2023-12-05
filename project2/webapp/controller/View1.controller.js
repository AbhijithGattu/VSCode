sap.ui.define([
    "com/project2/controller/BaseController"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.project2.controller.View1", {
            onInit: function () {

            },
            goToView2:function(){
                var oApp = this.getAppObject();
                oApp.to("idView2");
            }
        });
    });
