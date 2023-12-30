sap.ui.define([], function () {
    return sap.m.Button.extend("com.project2.customControls.CustomControl", {
        metadata: {
            properties: {

            },
            methods: {

            },
            events: {
                "customMouseHover":{}
            }
        },
        init: function () {

        },
        renderer: {

        },
        onmouseover:function(){
            this.fireCustomMouseHover();
        }
    });
});