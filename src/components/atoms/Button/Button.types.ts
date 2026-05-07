export type ButtonVarient = "primary" | "secondary" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  label: string;
  varient?: ButtonVarient;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: void;
  // ─── Accessibility ───────────────────────────────
  ariaLabel?: string;    
  ariaExpanded?: boolean;   
  ariaPressed?: boolean;    
  ariaControls?: string;  
}
