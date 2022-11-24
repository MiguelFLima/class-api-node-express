import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://miguel:123@cluster0.zjnksq1.mongodb.net/Book-Store-Database"
);

let db = mongoose.connection;

export default db;
