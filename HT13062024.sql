SELECT * FROM homework.employees;

-- Повысить зарплаты для отдела sales на 20%, для finance 15%, для shipping 10%, 
-- для marketing 25%, для Human Resources 20% и для IT 35%. Записать данные в новое
 -- поле new_salary. Поле создавать не нужно, используем AS.
  set sql_safe_updates = 0;
 select department, salary,
 case
 when department='sales' then salary+salary*20/100
 when department='finance' then salary+salary*15/100
 when department='shipping' then salary+salary*10/100
 when department='marketing' then salary+salary*25/100
 when department='Human Resources' then salary+salary*20/100
 when department='IT' then salary+salary*35/100
 else salary
 end as new_salary
 from employees;
 
alter table employees
add n_salary numeric(7,2);
 
  update employees
  set n_salary = case when department='sales' then salary+salary*20/100
 when department='finance' then salary+salary*15/100
 when department='shipping' then salary+salary*10/100
 when department='marketing' then salary+salary*25/100
 when department='Human Resources' then salary+salary*20/100
 when department='IT' then salary+salary*35/100
 else salary
 end;
 alter table employees
 drop n_salary;
 
alter table employees
add n_salary numeric(7,2);
 update employees
  set n_salary = case when department='sales' then salary+salary*20/100
 when department='finance' then salary+salary*15/100
 when department='shipping' then salary+salary*10/100
 when department='marketing' then salary+salary*25/100
 when department='Human Resources' then salary+salary*20/100
 when department='IT' then salary+salary*35/100
 else salary
 end;
 

 select first_name as name, last_name as surname, salary as total_salary,
  case
 when salary<3000 then null
 when salary<6000 then 10
 when salary<9000 then 15
 when salary>=9000 then 20
 else salary
 end as commission
 from employees;
 
 alter table employees
add commision int;

set sql_safe_updates = 0;
 update employees
  set commision = case
when salary<3000 then null
 when salary<6000 then 10
 when salary<9000 then 15
 when salary>=9000 then 20
 else salary
 end;
 
 alter table employees
add finalsalary int;


 update employees
  set finalsalary = case when commision is null then salary
  else salary + salary*commision/100
  end;
  