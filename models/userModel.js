import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username area is required"],
        lowecase: true,
        validate: [validator.isAlphanumeric, "Only Alphanumeric characters "]
    },
    email: {
        type: String,
        required: [true, "Email area is required"],
        unique: true,
        validate: [validator.isEmail, "Valid email is required"]
    },
    password: {
        type: String,
        required: [true, "Password area is required"],
        minlength: [4, "Password must be at least 4 characters"],
        validate: [validator.isLength, "Password must be at least 4 characters"]
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ],
    followings: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ],
},
    {
        timestamps: true,
    }
);
userSchema.pre("save", function (next) {
    const user = this;
    // console.log("USER PASS 1",user.password);
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        // console.log("USER PASS 2",user.password);
        next();
    })
})
const User = mongoose.model("User", userSchema);

export default User;