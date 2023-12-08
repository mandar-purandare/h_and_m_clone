import mongoose, {Schema} from "mongoose";

const user = Schema({
    email: String,
    password: String,
    dob: Date
})

export default mongoose.model('users', user);