namespace cap_tutorial;
using { cuid , managed , Country} from '@sap/cds/common';
using from '@sap/cds-common-content';

entity SalesOrders {
      @title: 'Sales Order Number'
  key soNumber        : String;

      @title: 'Order Date'
      orderDate       : Date;

      @title: 'Customer Name'
      customerName    : String;

      @title: 'Customer Number'
      customerNumber  : String;

      @title: 'PO Number'
      PoNumber        : String;

      @title: 'Inquiry Number'
      inquiryNumber   : String;

      @title: 'Total Sales Order'
      totalOrderItems : Integer;
}

entity Customers {
  key CustomerID  : String;
      CompanyName : String;
      ContactName : String;
      ContactTitle : String;
      Address     : String;
      City        : String;
      Region      : String;
      PostalCode  : Integer;
      Country     : String;
      Phone       : String;
      Fax         : String;
      orderInfo   : Association to one Orders on orderInfo.CustomerID = $self.CustomerID
}

entity Orders {
  key OrderID        : Integer;
      CustomerID     : String;
      OrderDate      : Date;
      RequiredDate   : Date;
      ShippedDate    : Date;
      ShipVia        : String;
      Freight        : String;
      ShipName       : String;
      ShipAddress    : String;
      ShipCity       : String;
      ShipRegion     : String;
      ShipPostalCode : Integer;
      ShipCountry    : String;
      CustomerInfo   : Association to one Customers on CustomerInfo.CustomerID = $self.CustomerID;
      OrderedBy      : Integer;
}

entity Products {
  key ProductID       : Integer;
      ProductName     : String;
      SupplierID      : Integer;
      CategoryID      : Integer;
      QuantityPerUnit : String;
      UnitPrice       : Integer;
      UnitsInStock    : Integer;
      UnitsOnOrder    : Integer;
      ReorderLevel    : Integer;
      Discontinued    : Integer;
      OrderedBy       : Integer;
      OrderedByinfo   : Association to many Orders on OrderedByinfo.OrderedBy = $self.OrderedBy;

}

entity Trail: cuid, managed{
  trail : Integer;
  country :  Country;
}
