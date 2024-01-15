import {
  asyncError,
  cookieSetter,
  errorHandler,
  generateToken,
} from "../../../middlewares/error";
import { User } from "../../../model/userModel";
import { connectDB } from "../../../utils/database";
import bcrypt from "bcrypt";


const handler = asyncError(async (req, res) => {
    if (req.method != "POST")
    return errorHandler(res, 404, "only POST method is allowed");

  const { name, email, password } = req.body;

  if ((!name, !email, !password))
    return errorHandler(res, 400, "Please Enter all Fields");
  await connectDB();
  let user = await User.findOne({ email });

  if (user) return errorHandler(res, 400, "User Registaed with this email");

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({name,email,password:hashedPassword});


const token = generateToken(user._id);

cookieSetter(res, token, true);
res.status(201).json({
  status: "success",
  message: "User Regestated Successfully",
});
});
export default handler;
