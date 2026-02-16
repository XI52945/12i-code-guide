export const sqlIntro = {
  title: 'SQL 数据库',
  desc: 'SQL (Structured Query Language) 是用于管理关系数据库系统的标准编程语言，用于存储、操作和检索数据。',
  keyFeatures: ['数据查询 (DQL)', '数据操作 (DML)', '数据定义 (DDL)', '权限控制 (DCL)', '事务管理 (TCL)']
};

export const sql = [
  {
    command: 'SELECT',
    description: '从数据库中选取数据',
    example: 'SELECT name, age FROM users;'
  },
  {
    command: 'WHERE',
    description: '用于过滤记录，提取满足指定条件的记录',
    example: 'SELECT * FROM users WHERE age > 18;'
  },
  {
    command: 'AND / OR',
    description: '在 WHERE 子句中结合多个条件',
    example: 'SELECT * FROM users WHERE age > 18 AND city = "Beijing";'
  },
  {
    command: 'ORDER BY',
    description: '对结果集进行排序 (ASC 升序, DESC 降序)',
    example: 'SELECT * FROM users ORDER BY age DESC;'
  },
  {
    command: 'INSERT INTO',
    description: '向表中插入新记录',
    example: 'INSERT INTO users (name, email) VALUES ("Alice", "alice@example.com");'
  },
  {
    command: 'UPDATE',
    description: '更新表中的现有记录',
    example: 'UPDATE users SET age = 30 WHERE name = "Alice";'
  },
  {
    command: 'DELETE',
    description: '删除表中的现有记录',
    example: 'DELETE FROM users WHERE id = 1;'
  },
  {
    command: 'LIMIT / TOP',
    description: '规定要返回的记录的数目',
    example: 'SELECT * FROM users LIMIT 10;'
  },
  {
    command: 'MIN() / MAX()',
    description: '返回一列中的最小/最大值',
    example: 'SELECT MAX(price) FROM products;'
  },
  {
    command: 'COUNT()',
    description: '返回匹配指定条件的行数',
    example: 'SELECT COUNT(*) FROM users WHERE active = 1;'
  },
  {
    command: 'SUM() / AVG()',
    description: '返回数值列的总数/平均值',
    example: 'SELECT AVG(price) FROM products;'
  },
  {
    command: 'LIKE',
    description: '在 WHERE 子句中搜索列中的指定模式',
    example: 'SELECT * FROM users WHERE name LIKE "A%"; -- 以 A 开头'
  },
  {
    command: 'IN',
    description: '在 WHERE 子句中规定多个值',
    example: 'SELECT * FROM users WHERE country IN ("China", "USA", "UK");'
  },
  {
    command: 'BETWEEN',
    description: '选取介于两个值之间的数据范围',
    example: 'SELECT * FROM products WHERE price BETWEEN 10 AND 20;'
  },
  {
    command: 'AS (Alias)',
    description: '为表或列指定别名',
    example: 'SELECT name AS n, age AS a FROM users;'
  },
  {
    command: 'INNER JOIN',
    description: '如果表中有至少一个匹配，则返回行',
    example: 'SELECT users.name, orders.id FROM users INNER JOIN orders ON users.id = orders.user_id;'
  },
  {
    command: 'LEFT JOIN',
    description: '即使右表中没有匹配，也从左表返回所有的行',
    example: 'SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;'
  },
  {
    command: 'RIGHT JOIN',
    description: '即使左表中没有匹配，也从右表返回所有的行',
    example: 'SELECT users.name, orders.id FROM users RIGHT JOIN orders ON users.id = orders.user_id;'
  },
  {
    command: 'UNION',
    description: '合并两个或多个 SELECT 语句的结果集',
    example: 'SELECT city FROM customers UNION SELECT city FROM suppliers;'
  },
  {
    command: 'GROUP BY',
    description: '结合聚合函数，根据一个或多个列对结果集进行分组',
    example: 'SELECT COUNT(id), country FROM users GROUP BY country;'
  },
  {
    command: 'HAVING',
    description: 'WHERE 关键字无法与聚合函数一起使用，HAVING 子句可以',
    example: 'SELECT COUNT(id), country FROM users GROUP BY country HAVING COUNT(id) > 5;'
  },
  {
    command: 'CREATE DATABASE',
    description: '创建新数据库',
    example: 'CREATE DATABASE my_db;'
  },
  {
    command: 'DROP DATABASE',
    description: '删除数据库',
    example: 'DROP DATABASE my_db;'
  },
  {
    command: 'CREATE TABLE',
    description: '创建新表',
    example: 'CREATE TABLE users (id INT, name VARCHAR(255), age INT);'
  },
  {
    command: 'DROP TABLE',
    description: '删除表',
    example: 'DROP TABLE users;'
  },
  {
    command: 'ALTER TABLE',
    description: '在表中添加、删除或修改列',
    example: 'ALTER TABLE users ADD email VARCHAR(255);'
  },
  {
    command: 'PRIMARY KEY',
    description: '约束唯一标识数据库表中的每条记录',
    example: 'CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(255));'
  },
  {
    command: 'FOREIGN KEY',
    description: '约束用于预防破坏表之间连接的动作',
    example: 'CREATE TABLE orders (id INT, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));'
  },
  {
    command: 'CREATE INDEX',
    description: '用于在表中创建索引',
    example: 'CREATE INDEX idx_lastname ON users (lastname);'
  },
  {
    command: 'DROP INDEX',
    description: '删除表格中的索引',
    example: 'ALTER TABLE users DROP INDEX idx_lastname;'
  }
];
