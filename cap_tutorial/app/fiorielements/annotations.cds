using CatalogService as service from '../../srv/cat-service';

annotate service.SalesOrder with @odata.draft.enabled;
annotate service.SalesOrder with @(
    UI : {
        //filter bar 
        SelectionFields  : [
        customerName_CustomerID,
        Country
    ], 
    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : soNumber,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : customerName.ContactName,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : orderDate,
            Criticality : #Critical,
            CriticalityRepresentation : #WithIcon,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : totalOrderItems,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : inquiryNumber,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : PoNumber,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : customerNumber,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : Country,
            ![@UI.Importance] : #High
        }
    ],}
){
    soNumber  @title: 'Sales Order Number';
    customerName @(
        title : 'customer Name',
        Common: {
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'CustomerSet',
                Label : 'Customer Name',
                Parameters:[
                    {
                        $Type:'Common.ValueListParameterOut',
                        LocalDataProperty:customerName_CustomerID,
                        ValueListProperty: 'Id'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'Description'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'ContactName'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'ContactTitle'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'Address'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'City'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'Region'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'PostalCode'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'Phone'
                    },
                    {
                        $Type:'Common.ValueListParameterDisplayOnly',
                        ValueListProperty:'Fax'
                    }
                ]
            },
        }
    );
    Country @(
        title           : 'Countries',
        Common.ValueListWithFixedValues : true,
        Common.ValueList: {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Countries',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: 'Country',
                ValueListProperty: 'descr'
            }],
            Label         : 'Countries',
        }
    )
};
annotate service.CustomerSet with {
    Description @(
        title           : 'Description',
        Common.ValueList: {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'CustomerSet',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: 'Description',
                ValueListProperty: 'Description'
            }]
        }
    )
}
