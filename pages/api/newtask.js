// import { asyncError, errorHandler } from "../../middlewares/error";
// import { Task } from "../../model/taskModel";
// import { connectDB } from "../../utils/database";
// const handler = asyncError(async (req, res) => {
//   if (req.method != "POST")
//     return errorHandler(res, 404, "only POST method is allowed");

//   await connectDB();

//   const task = await Task.create(req.body);
//   res.status(201).json({
//     task,
//     success: true,
//     message: "Task Create Successfully",
//   });
// });

// export default handler;

import { checkAuth } from "../../utils/features";

import { asyncError, errorHandler } from "../../middlewares/error";
import { Task } from "../../model/taskModel";
import { connectDB } from "../../utils/database";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    return errorHandler(res, 400, "Please Enter All fields");

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 401, "Login First");

  const task = await Task.create({
    title,
    description,
    user: user._id,
  });

  res.json({
    success: true,
    message: "Task Created",
    task,
  });
});

export default handler;
