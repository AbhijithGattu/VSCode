sap.ui.define(
    [
        "sap/ui/model/json/JSONModel"
    ], 
    function(JSONModel) {
    'use strict';
    return{
        createMymodel: function(sPath){
            var oModel = new JSONModel();
            oModel.loadData(sPath,false);
            
            return oModel;
        }
    }
    
});