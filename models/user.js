import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({
    email :{
        type: String,
        requried: true,
    },
    name:{
        type: String,
        requried: true,
    },
},

{timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;