import { QueryBuilder } from "./query.builder.ts";

const queryOne: string = new QueryBuilder()
    .select("users.name, COUNT(purchases.id) AS total_purchases")
    .from("users, purchases")
    .where("users.id = purchases.user_id")
    .groupBy("users.name")
    .build()

console.log(queryOne)

console.log("...\n")

const queryTwo: string = new QueryBuilder()
    .select("users.name, users.email")
    .from("users")
    .join('orders', 'users.id = orders.user_id')
    .where('orders.count > 100')
    .where('users.location = \'USA\'')
    .groupBy('users.name, users.email')
    .orderBy('users.name')
    .build()

console.log(queryTwo)

/**
 
SELECT users.name, COUNT(purchases.id) AS total_purchases
FROM users, purchases
WHERE users.id = purchases.user_id
GROUP BY users.name
...

SELECT users.name, users.email
FROM users
JOIN orders ON users.id = orders.user_id
WHERE orders.count > 100 AND users.location = 'USA'
GROUP BY users.name, users.email
ORDER BY users.name

 */
