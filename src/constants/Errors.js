export const USERNAME_ERRORS = {
  USERNAME_REQUIRED: "Username is required.",
  USERNAME_INVALID_LENGTH: "Username must contain 3-21 Characters",
  USERNAME_INVALID_CHARACTERS:
    "Only letters, numbers, periods & underscores allowed.",
  USERNAME_INVALID_DOT_POSITION: "Username cannot start or end with a period.",
  USERNAME_CONTAINS_CONSECUTIVE_DOTS:
    "Username cannot contain consecutive periods.",
  USERNAME_AVAILABLE: "Username is available.",
  USERNAME_UNAVAILABLE: "Username is already taken.",
};

export const EMAIL_ERRORS = {
  EMAIL_REQUIRED: "Email is required.",
  EMAIL_INVALID_LENGTH: "Email is too short or too long.",
  EMAIL_INVALID_FORMAT: "Email format is invalid.",
  EMAIL_UNSUPPORTED_PROVIDER: "Only Gmail, Hotmail & iCloud are supported.",
  EMAIL_EXISTS: "Email is already in use.",
};
