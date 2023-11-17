sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/project1/utils/createModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,createModel) {
        "use strict";

        return Controller.extend("com.project1.controller.View1", {
            onInit: function () {
                // var oModel = new JSONModel();
                //type1 
                //haed code data
                // var obj = {
                //     "empStr" : {
                //         "empID" : "theleedu",
                //         "empName" : "Neeku Enduku Bro!",
                //         "empSalary" : "cheppanu Bro!",
                //         "curr" : "Ewww..."
                //     }
                // }
                // oModel.setData(obj);

                //type 2
                //from json file
                // oModel.loadData("model/view1.json");
                // this.getView().setModel(oModel);

                //type 3
                //from utils file
                var oModel = createModel.createMymodel();
                this.getView().setModel(oModel);
                this.getView().byId("salary").bindValue("/empStr/empSalary");//syntax 1
                this.getView().byId("curr").bindProperty("value", "/empStr/curr");//Syntax 2
            }
        });
    });
