import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../model/userModel";
import { connectDB } from "../../../utils/database";
import { checkAuth } from "../../../utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET Method is allowed");
  await connectDB();

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 401, "Login First");

  const users = await User.findById(user);
  res.json({
    success: true,
    users,
  });
});

export default handler;
