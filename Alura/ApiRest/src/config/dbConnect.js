import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ncaio037:28481508@Cluster-Alura.b9u1t6d.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

