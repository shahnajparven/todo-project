// import { asyncError, checkAuth, errorHandler } from "../../middlewares/error";
// import { Task } from "../../model/taskModel";
// import { connectDB } from "../../utils/database";
// const handler = asyncError(async (req, res) => {
//   if (req.method != "GET")
//     return errorHandler(res, 404, "Only GET method is allowed");

//   await connectDB();
//   const user = await checkAuth(req);
//   // if (!user) return errorHandler(res, 401, "Login First");

//   const tasks = await Task.find({ user: user._id });
//   res.status(201).json({
//     tasks,
//     success: true,
//     message: "Welcome",
//   });
// });

import { Task } from "../../model/taskModel";
import { asyncError, errorHandler } from "../../middlewares/error";
import { connectDB } from "../../utils/database";
import { checkAuth } from "../../utils/features";
import { User } from "../../model/userModel";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET Method is allowed");
  await connectDB();

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 401, "Login First");

  const task = await Task.find({ user: user._id });

  res.json({
    success: true,
    task,
  });
});

export default handler;
