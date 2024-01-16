import { Task } from "../../model/taskModel";
import { asyncError, errorHandler } from "../../middlewares/error";
import { connectDB } from "../../utils/database";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET Method is allowed");
  await connectDB();

//   const user = await checkAuth(req);

//   if (!user) return errorHandler(res, 401, "Login First");

  const alltasks = await Task.find({});

  res.json({
    success: true,
    alltasks,
  });
});

export default handler;
