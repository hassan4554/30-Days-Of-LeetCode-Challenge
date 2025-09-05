# Write your MySQL query statement below
Select name from SalesPerson where name not in (Select SalesPerson.name from Orders left join Company on Orders.com_id = Company.com_id
left join SalesPerson on SalesPerson.sales_id = Orders.sales_id
where Company.name = "RED");