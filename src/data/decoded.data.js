export const decodedErrors = [
  // Username
  {
    field: "username",
    code: "USERNAME_REQUIRED",
    message: "Username is required.",
  },
  {
    field: "username",
    code: "USERNAME_INVALID_LENGTH",
    message: "Username must be 3-21 characters long.",
  },
  {
    field: "username",
    code: "USERNAME_INVALID_CHARACTERS",
    message:
      "Username can only contain Letters, Numbers, Underscores (_) & Periods (.).",
  },
  {
    field: "username",
    code: "USERNAME_INVALID_DOT_POSITION",
    message: "Periods (.) cannot be used at the end or start.",
  },
  {
    field: "username",
    code: "USERNAME_CONTAINS_CONSECUTIVE_DOTS",
    message: "Username cannot contain consecutive Periods (.)",
  },
  {
    field: "username",
    code: "USERNAME_NUMERIC_ONLY",
    message: "Username must contain letters.",
  },
  {
    field: "username",
    code: "USERNAME_NOT_ALLOWED",
    message: "This username is not allowed.",
  },

  // Email
  {
    field: "email",
    code: "EMAIL_REQUIRED",
    message: "Email is required.",
  },
  {
    field: "email",
    code: "EMAIL_INVALID_LENGTH",
    message: "Email it too short or long.",
  },
  {
    field: "email",
    code: "EMAIL_INVALID_FORMAT",
    message: "Email is invalid.",
  },
  {
    field: "email",
    code: "EMAIL_UNSUPPORTED_PROVIDER",
    message: "Only Gmail, Hotmail & iCloud are Supported.",
  },

  // Password
  {
    field: "password",
    code: "PASSWORD_REQUIRED",
    message: "Password is required.",
  },
  {
    field: "password",
    code: "PASSWORD_INCORRECT",
    message: "Password is incorrect.",
  },
  {
    field: "password",
    code: "PASSWORD_INVALID_LENGTH",
    message: "Password must be 6-64 characters long.",
  },
  {
    field: "password",
    code: "PASSWORD_CONTAINS_SPACES",
    message: "Password cannot contains spaces.",
  },
  {
    field: "password",
    code: "PASSWORD_INVALID_CHARACTERS",
    message: "Only Letters, Numbers & Special Characters are allowed.",
  },

  // Login
  {
    field: "emailOrUsername",
    code: "USER_NOT_FOUND",
    message: "Cannot found any account associated with this username or email.",
  },

  // Caption
  {
    field: "caption",
    code: "CAPTION_REQUIRED",
    message: "Caption is required.",
  },
  {
    field: "caption",
    code: "CAPTION_INVALID_LENGTH",
    message: "Caption is too short or long.",
  },
];
