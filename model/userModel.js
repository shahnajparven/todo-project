// import mongoose, { model, Schema } from "mongoose";


// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       select: false,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now(),
//     },
//   },
//   { timestamps: true }
// );
// mongoose.models = {};

// export const User = model("user", userSchema);

import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [4, "Password too short"],
  },
});

mongoose.models = {};

export const User = mongoose.model("user", schema);
