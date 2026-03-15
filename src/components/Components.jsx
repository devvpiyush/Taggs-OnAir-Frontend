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
  spellCheck = true,
  autoCorrect = true,
  autoComplete = true,
  autoCapitalize = true,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      spellCheck={spellCheck}
      autoCorrect={autoCorrect ? "on" : "off"}
      autoComplete={autoComplete ? "on" : "off"}
      autoCapitalize={autoCapitalize ? "on" : "off"}
      onChange={onChange}
      className={styles.AuthInput}
    ></input>
  );
}

export function AuthPrimaryButton({
  type = "button",
  text = "",
  isDisabled = false,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
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
