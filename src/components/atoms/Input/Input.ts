import "./Input.scss";
import type { InputProps } from "./Input.type";

export const Input = ({
  type = "text",
  size = "md",
  placeholder = "",
  value = "",
  error = "",
  disabled = false,
  ariaLabel,
  ariaDescribedBy = "input-error",
  ariaRequired,
}: InputProps): string => {
  return `
    <div class="input-wrapper">

      <input
        type="${type}"
        class="input input--${size} ${error ? "input--error" : ""} ${disabled ? "input--disabled" : ""}"
        placeholder="${placeholder}"
        value="${value}"
        ${disabled ? "disabled" : ""}
        aria-disabled="${disabled}"
        aria-invalid="${error ? "true" : "false"}"
        ${ariaRequired ? 'aria-required="true"' : ""}
        ${ariaLabel ? `aria-label="${ariaLabel}"` : ""}
        ${error ? `aria-describedby="${ariaDescribedBy}"` : ""}
      />

      ${
        error
          ? `
        <span
          class="input__error-msg"
          id="${ariaDescribedBy}"
          role="alert"
        >
          ${error}
        </span>
      `
          : ""
      }

    </div>
  `;
};
