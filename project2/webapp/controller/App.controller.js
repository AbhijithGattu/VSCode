sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
    ],
    function(BaseController,JSONModel) {  
      "use strict";
  
      return BaseController.extend("com.project2.controller.App", {
        onInit: function() {


          var oModel = new JSONModel();
          oModel.loadData("../model/data.json");
          this.getView().setModel(oModel);


          var oApp = this.getView().byId("app");
          var oView1 = new sap.ui.view({
            id:"idView1",
            viewName : "com.project2.view.View1",
            type : sap.ui.core.mvc.ViewType.XML
          });

          var oView2 = new sap.ui.view({
            id:"idView2",
            viewName : "com.project2.view.View2",
            type : sap.ui.core.mvc.ViewType.XML
          });
          var oEmpty = new sap.ui.view({
            id:"idEmpty",
            viewName : "com.project2.view.Empty",
            type : sap.ui.core.mvc.ViewType.XML
          });
          oApp.addMasterPage(oView1);
          oApp.addDetailPage(oEmpty);
          oApp.addDetailPage(oView2);
          
          oApp.setInitialDetail("idEmpty");
        }
      });
    }
  );
  