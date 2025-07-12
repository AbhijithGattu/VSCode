sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/fiorielements/test/integration/FirstJourney',
		'com/fiorielements/test/integration/pages/SalesOrderList',
		'com/fiorielements/test/integration/pages/SalesOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderList, SalesOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/fiorielements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderList: SalesOrderList,
					onTheSalesOrderObjectPage: SalesOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);