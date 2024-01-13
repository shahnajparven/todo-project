import { errorHandler } from "../../middlewares/error";
import { Task } from "../../model/taskModel";
import { connectDB } from "../../utils/database";
const handler = async (req, res) => {
  await connectDB();

  if (req.method != "POST") {
    return errorHandler(res,404,"only POST method is allowed")
  } else {
    await connectDB();

    const task = await Task.create(req.body);
    res
      .status(201)
      .json({
        task,
        success: true,
        message: "Task Create Successfully",
      });
  }
};

export default handler;
