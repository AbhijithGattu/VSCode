sap.ui.define([], function () {
    return sap.ui.core.Control.extend("com.project2.customControls.CustomControl", {

        metadata: {
            properties:{
                "text":"",
                "color":""
            },
            methods:{

            },
            events:{

            }
        },
        init: function () {

        },
        renderer: function (oRm, oControl) {
            // oRm.write("<h1 style='font-size:1.5rem; color:"+oControl.getColor()+"'>"+oControl.getText()+"</h1>");
            oRm.write("<h1");
            oRm.addStyle("font-size","1.5rem");
            oRm.addStyle("margin","0rem");
            oRm.addStyle("color",oControl.getColor());
            oRm.writeStyles();
            oRm.write(">"+oControl.getText()+"</h1>");
        }
    });
});