import { Blender } from "@mui/icons-material";
import mongoose, { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    // user: {
    //   type: mongoose.Schema.Type.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // { timestamps: true }
);
mongoose.models = {};
export const Task = model("Task", taskSchema);
