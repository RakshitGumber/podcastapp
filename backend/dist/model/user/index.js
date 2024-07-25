import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    verified: { type: Boolean },
    password: {
        type: String,
        required: true,
    },
    subscribed: { type: Boolean },
});
const Users = model("Users", userSchema);
export default Users;
