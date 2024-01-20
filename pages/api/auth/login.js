import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../model/userModel";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { cookieSetter, generateToken } from "../../../utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method != "POST")
    return errorHandler(res, 404, "Only POST Method is Allowed");

  const { email, password } = req.body;

  if ((!email, !password))
    return errorHandler(res, 400, "Please Enter all Fields");

  await connectDB();
  const user = await User.findOne({ email }).select("+password");

  if (!user) return errorHandler(res, 400, "Invalid Email or Password");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return errorHandler(res, 400, "Invalid Email or Password");

  const token = generateToken(user._id);

  cookieSetter(res, token, true);
  res.status(200).json({
    success: true,
    message: "Login Successfull",
    user,
  });
});
export default handler;
