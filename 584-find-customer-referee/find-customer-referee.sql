# Write your MySQL query statement below
-- select t1.name from Customer t1 join Customer t2 on t1.id = t2.referee_id where t1.referee_id != 2;

select name from Customer where referee_id != 2 or referee_id is null;