// External Modules
import validator from "validator";

export function validateUsername(value) {
  if (!value) {
    return "USERNAME_REQUIRED";
  }

  let normalized = value.trim();

  if (!validator.isLength(normalized, { min: 3, max: 21 })) {
    return "USERNAME_INVALID_LENGTH";
  }

  if (!validator.matches(normalized, /^[a-z0-9._]+$/)) {
    return "USERNAME_INVALID_CHARACTERS";
  }

  if (normalized.startsWith(".") || normalized.endsWith(".")) {
    return "USERNAME_INVALID_DOT_POSITION";
  }

  if (normalized.includes("..")) {
    return "USERNAME_CONTAINS_CONSECUTIVE_DOTS";
  }

  return null; // Success!
}
