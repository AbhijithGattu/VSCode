using CatalogService as service from '../../srv/cat-service';
annotate service.SalesOrder with @(
    UI : {
        //filter bar 
        SelectionFields  : [
        soNumber
    ], 
    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : soNumber,
            ![@UI.Importance] : #High
        },
        {
            $Type : 'UI.DataField',
            Value : customerName,
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
    ],}
){
    soNumber  @title: 'Sales Order Number'
};
