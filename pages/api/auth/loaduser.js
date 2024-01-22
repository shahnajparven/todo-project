// import { checkAuth } from "../../../utils/features";
// import { asyncError, errorHandler } from "../../../middlewares/error";
// import { connectDB } from "../../../utils/database";
// import { User } from "../../../model/userModel";

// const handler = asyncError(async (req, res) => {
//   if (req.method !== "GET")
//     return errorHandler(res, 400, "Only GET Method is allowed");
//   await connectDB();

//   const user = await User.findOne(req.user.id);
//   console.log(user);
//   if (!user) return errorHandler(res, 404, "user not found");

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });
// export default handler;

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
