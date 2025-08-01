using { cap_tutorial as db } from '../db/data-model';
using from './value-helps';
service CatalogService @(path:'/CatalogService')
    {
    entity SalesOrder as projection on db.SalesOrders{
        *,
        customerName.Countries.descr as Country
    } order by soNumber;
    // entity Customer as projection on db.Customers;
    entity Order as projection on db.Orders;
    entity Product as projection on db.Products;
    entity Trail as projection on db.Trail;
    
    }