import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

export default mongoose.model(
    "User",
    userSchema
);