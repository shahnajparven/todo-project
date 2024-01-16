import { asyncError, errorHandler } from "../../../middlewares/error";

import { cookieSetter } from "../../../utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method != "GET")
    return errorHandler(res, 404, "Only GET Method is Allowed");

  cookieSetter(res, null, false);
  res.status(200).json({
    status: "success",
    message: "Logout Successfull",
  });
});
export default handler;
