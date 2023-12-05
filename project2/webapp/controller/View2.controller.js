sap.ui.define([
    "com/project2/controller/BaseController"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.project2.controller.View2", {
            onInit: function () {

            },
            goToView1:function(){
                var oApp = this.getAppObject();
                oApp.to("idView1");
            }
        });
    });
