// Local Modules
import { decodedErrors } from "@data/decoded.data.js";

export const decodeErrorCode = (code) => {
  const msg = decodedErrors.find((err) => err.code === code).message;
  return msg;
};
