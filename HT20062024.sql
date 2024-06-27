create database oe;

use oe;

-- Вывести имя, фамилию покупателей и даты их заказов(order_date).

select cst.CUST_FIRST_NAME, cst.CUST_LAST_NAME, orders.ORDER_DATE
from customers cst
join orders
on cst.CUSTOMER_ID=orders.CUSTOMER_ID;

-- Вывести даты заказов продуктов и описание этих продуктов(product_description).

select orders.ORDER_DATE, product_information.PRODUCT_DESCRIPTION
from orders
left join  order_items
on orders.ORDER_ID= order_items.ORDER_ID
left join product_information
on product_information.PRODUCT_ID= order_items.PRODUCT_ID;

-- Вывести имя, фамилию покупателей, даты заказов(orderdate), описание продуктов, которые
-- они заказали и категории соответствующих продуктов (categoryname).

select cst.CUST_FIRST_NAME, cst.CUST_LAST_NAME, orders.ORDER_DATE, product_information.PRODUCT_DESCRIPTION, categories_tab.CATEGORY_NAME
from customers cst
 join orders
on cst.CUSTOMER_ID=orders.CUSTOMER_ID
 join order_items
on orders.ORDER_ID=order_items.ORDER_ID
join product_information
on order_items.PRODUCT_ID=product_information.PRODUCT_ID
join categories_tab
on product_information.CATEGORY_ID=categories_tab.CATEGORY_ID;

-- Вывести названия(productname), описания категорий(categorydescription) и количества(quantity) тех продуктов,
-- у которых минимальная стоимость (min_price) больше 300.

select PRODUCT_NAME, MIN_PRICE, categories_tab.CATEGORY_DESCRIPTION 
from product_information
left join categories_tab 
on product_information.CATEGORY_ID= categories_tab.CATEGORY_ID
where product_information.MIN_PRICE > 300;

-- Вывести имя, фамилию всех женатых мужчин покупателей, которые купили
-- продукты со стоимостью (list_price) больше 550.

select CUST_FIRST_NAME, CUST_LAST_NAME, product_information.LIST_PRICE 
from customers
join product_information 
on product_information.LIST_PRICE>550
where customers.GENDER = 'M';

-- Вывести те продукты(productname), которых нет в заказанных (таблица orderitems).

select product_information.PRODUCT_NAME, product_information.PRODUCT_ID
from product_information
left join order_items
 on order_items.PRODUCT_ID = product_information.PRODUCT_ID
  where order_items.ORDER_ID is null;
  
 -- Вывести покупателей(custfirstname, custlastname), которые ничего не заказали (таблица orders).
 
 select CUST_FIRST_NAME, CUST_LAST_NAME
 from customers
 left join orders
 on customers.CUSTOMER_ID=orders.CUSTOMER_ID
 where orders.ORDER_ID is null;
