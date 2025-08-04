// LAB20 --- MongoDB Commands

// 1

db.products.insertMany([
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Desk", price: 150, category: "Furniture" },
  { name: "Book", price: 20, category: "Stationery" }
]);

// 2

db.orders.insertMany([
  {
    orderId: "ORD001",
    customerName: "John Doe",
    orderDate: new Date("2024-06-15"),
    totalAmount: 1200
  },
  {
    orderId: "ORD002",
    customerName: "Alice Smith",
    orderDate: new Date("2024-07-01"),
    totalAmount: 750
  }
])

// 3

db.users.insertMany([
  { name: "Alice", email: "alice@example.com", age: 30 },
  { name: "Bob", email: "bob@example.com", age: 28 },
  { name: "Charlie", email: "charlie@example.com", age: 35 },
  { name: "David", email: "david@example.com", age: 19 },
  { name: "Eva", email: "eva@example.com", age: 22 },
]);

// 4

db.users.find({ age: { $gt: 25 } }, { name: 1, email: 1, _id: 0 });

// 5

db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } });

// 6 

db.users.deleteMany({ age: { $lt: 20 } });

// 7

db.users.aggregate([{ $sort: { age: -1 } }, { $limit: 3 }]);

// 8 

db.users.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
    },
  },
  { $sort: { age: -1 } },
  { $limit: 3 },
]);

// 9

db.users.aggregate([
  {
    $group: {
      _id: "$age",
      totalUsers: { $sum: 1 },
    },
  },
]);

// 10
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" },
    },
  },
]);


