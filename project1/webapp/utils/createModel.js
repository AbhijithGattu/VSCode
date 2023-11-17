sap.ui.define(
    [
        "sap/ui/model/json/JSONModel"
    ], 
    function(JSONModel) {
    'use strict';
    return{
        createMymodel: function(){
            var oModel = new JSONModel();
            oModel.loadData("../model/data.json");
            
            return oModel;
        }
    }
    
});