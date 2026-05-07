import type { ButtonProps } from "./Button.types";
import "./button.scss";

export const Button = ({
  label,
  varient = "primary",
  size = "md",
  disabled = false,
  onClick,
  ariaLabel,
  ariaExpanded,
  ariaPressed,
  ariaControls,
}: ButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");
  button.className = [
    "button",
    `button--${varient}`,
    `button--${size}`,
    disabled ? "button-disabled" : "",
  ]
    .join(" ")
    .trim();

  button.textContent = label;

  // ─── Disabled ────────────────────────────────────
  button.disabled = disabled;
  button.setAttribute("aria-disabled", String(disabled));
  if (ariaLabel) {
    button.setAttribute("aria-label", ariaLabel);
  }
  if (typeof ariaExpanded === "boolean") {
    button.setAttribute("aria-expanded", String(ariaExpanded));
  }
  if (typeof ariaPressed === "boolean") {
    button.setAttribute("aria-pressed", String(ariaPressed));
  }
  // Kaunsa element yeh button control karta hai
  if (ariaControls) {
    button.setAttribute("aria-controls", ariaControls);
  }

  // ─── Keyboard ────────────────────────────────────
  // Enter aur Space pe click trigger ho
  button.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!disabled) button.click();
    }
  });

  // ─── Click ───────────────────────────────────────
  if (typeof onClick === "function") {
    button.addEventListener("click", onClick);
  }

  return button;
};
