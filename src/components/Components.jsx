// Local Modules
import styles from "@style/components.module.css";

export function Taggs() {
  return (
    <div className="px-4 py-8">
      <h1
        className="text-white text-4xl text-center font-medium tracking-wider"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </h1>
    </div>
  );
}

export function AuthInput({
  type = "text",
  placeholder = "",
  value,
  isRequired = true,
  minLength,
  maxLength,
  spellCheck = false,
  autoCorrect = false,
  autoComplete = false,
  autoCapitalize = false,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={isRequired}
      minLength={minLength}
      maxLength={maxLength}
      spellCheck={spellCheck}
      autoCorrect={autoCorrect ? "on" : "off"}
      autoComplete={autoComplete ? "on" : "off"}
      autoCapitalize={autoCapitalize ? "on" : "off"}
      onChange={onChange}
      className={styles.AuthInput}
    ></input>
  );
}

export function AuthInputWithIcon({
  type = "text",
  placeholder = "",
  value,
  isRequired = true,
  minLength,
  maxLength,
  iconVisible = true,
  spellCheck = false,
  autoCorrect = false,
  autoComplete = false,
  autoCapitalize = false,
  onChange,
  icon = "",
  onIconClick,
}) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 px-6 border-2 border-(--primary-border-color) hover:border-(--primary-border-hover-color) transition-colors ease-in-out duration-300 rounded-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        spellCheck={spellCheck}
        autoCorrect={autoCorrect ? "on" : "off"}
        autoComplete={autoComplete ? "on" : "off"}
        autoCapitalize={autoCapitalize ? "on" : "off"}
        onChange={onChange}
        className={styles.AuthInputWithIcon}
      ></input>
      {iconVisible && (
        <img
          src={icon}
          alt={`${icon}_Icon`}
          width={30}
          height={30}
          onClick={onIconClick}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export function AuthPrimaryButton({
  type = "button",
  text = "",
  isDisabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className="w-full py-3 bg-[#181818] border border-(--secondary-border-color) disabled:cursor-not-allowed text-white font-medium rounded-full cursor-pointer tracking-wider"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {text}
    </button>
  );
}

export function AuthSecondaryButton({ type = "button", text = "", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 bg-[#181818] border border-(--primary-border-color) text-white font-medium rounded-full cursor-pointer tracking-wide"
    >
      {text}
    </button>
  );
}
