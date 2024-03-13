sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("worklist.controller.View1", {
            onInit: function () {
                this.getView().getModel();
            }
        });
    });
