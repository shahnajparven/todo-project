import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../model/userModel";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";
import { cookieSetter, generateToken } from "../../../utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method != "POST")
    return errorHandler(res, 404, "Only POST Method is Allowed");

  const { name, email, password } = req.body;

  if ((!name, !email, !password))
    return errorHandler(res, 400, "Please Enter all Fields");
  await connectDB();
  let user = await User.findOne({ email });

  if (user) return errorHandler(res, 400, "User Registaed with this email");

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  const token = generateToken(user._id);

  cookieSetter(res, token, true);
  res.status(201).json({
    success: true,
    message: "User Regestated Successfully",
    user,
  });
});
export default handler;
