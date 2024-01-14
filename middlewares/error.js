import { serialize } from "cookie";
import jwt from 'jsonwebtoken';

export const errorHandler = (
  res,
  statusCode = 500,
  message = "Internal Server Error"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const asyncError = (passedFunc) => async(req, res) => {
  return Promise.resolve(passedFunc(req, res)).catch((err) => {
    return errorHandler(res, 500, message);
  });
};

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token",set?token:"", {
      path: "/",
      httpOnly: true,
      maxAge: set?15 * 24 * 60 * 1000:0,
    })
  );
};

export const generateToken = (_id) => {
    return jwt.sign({ id: _id }, process.env.JWT_SECRET);
   // options for cookie expire
    // const options = {
    //   expires: new Date(
    //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    //   ),
    //   httpOnly: true,
    // };
  
    // res.status(statusCode).cookie("token", token, options).json({
    //   token,
    //   status: "success",
    //   user,
    //   message,
      
    // });
  
  };
  


