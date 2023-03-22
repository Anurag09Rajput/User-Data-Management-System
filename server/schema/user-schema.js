
// Define a schema: In Mongoose, a schema defines the structure of a collection in MongoDB. You can define a schema like this:

import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

// A model is a class that represents a collection in MongoDB and allows you to perform CRUD operations on the documents in that collection. You can create a model like this:
const user = mongoose.model('user', userSchema); // This code creates a User model that maps to the user collection in MongoDB using the userSchema.

export default user;