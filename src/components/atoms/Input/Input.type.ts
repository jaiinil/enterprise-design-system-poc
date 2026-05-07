export type InputType = "text" | "password" | "email" | "number" | "range";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps {
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
onChange?: (event: Event) => void
  // ─── Accessibility ───────────────────────────────
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaPressed?: boolean;
  ariaControls?: string;
}
