import {
  asyncError,
  cookieSetter,
  errorHandler,
  generateToken,
} from "../../../middlewares/error";
import { User } from "../../../model/userModel";
import { connectDB } from "../../../utils/database";

const handler = asyncError(async (req, res) => {
    if (req.method != "POST")
    return errorHandler(res, 404, "only POST method is allowed");

  const { name, email, password } = req.body;

  if ((!name, !email, !password))
    return errorHandler(res, 400, "Please Enter all Fields");
  await connectDB();
  let user = await User.findOne({ email });

  if (user) return errorHandler(res, 400, "User Registaed with this email");

  user = await User.create(req.body);


const token = generateToken(user._id);

cookieSetter(res, token, true);
res.status(201).json({
  status: "success",
  message: "User Regestated Successully",
});
});
export default handler;
