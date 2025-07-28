using { cap_tutorial as db } from '../db/data-model';
using CatalogService as CatService from './cat-service';
extend service CatService with {
    entity CustomerSet as projection on db.Customers{
        CustomerID as Id @(Common: {
        Text           : Description,
        TextArrangement: #TextOnly
      }),
      @title : 'Company Name'
      CompanyName as Description,
      SORTORDER as sortorder @UI.Hidden,
      @title : 'Contact Name'
      ContactName as ContactName,
      @title : 'Contact Title'
      ContactTitle as ContactTitle,
      @title : 'Address'
      Address     as Address,
      @title : 'City'
      City        as City,
      @title : 'Region'
      Region      as Region,
      @title : 'Postal Code'
      PostalCode  as PostalCode,
      @title : 'Phone'
      Phone       as Phone,
      @title : 'Fax'
      Fax         as Fax,
    }
    where
      Customers.SORTORDER is not NULL 
    order by
      sortorder;
};
