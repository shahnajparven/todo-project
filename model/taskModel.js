import mongoose, { model, Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    title:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:true,
    },
  },
  { timestamps: true }
);
mongoose.models={};
export const Task = model('Task', taskSchema);
