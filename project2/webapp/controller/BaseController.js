sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {  
      "use strict";
  
      return Controller.extend("com.project2.controller.BaseController", {
        onInit: function() {
        },
        getAppObject: function(){
          return sap.ui.getCore().byId("idView1").getParent().getParent();
        }
      });
    }
  );
  