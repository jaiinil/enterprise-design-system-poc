import './Button.scss';
import type { ButtonProps } from './Button.types';

export const Button = ({
  label,
  varient = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel,
  ariaExpanded,
  ariaPressed,
  ariaControls,
}: ButtonProps): string => {
  return `
    <button
      class="button button--${varient} button--${size} ${disabled ? 'button--disabled' : ''}"
      ${disabled ? 'disabled' : ''}
      aria-disabled="${disabled}"
      ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
      ${typeof ariaExpanded === 'boolean' ? `aria-expanded="${ariaExpanded}"` : ''}
      ${typeof ariaPressed === 'boolean' ? `aria-pressed="${ariaPressed}"` : ''}
      ${ariaControls ? `aria-controls="${ariaControls}"` : ''}
    >
      ${label}
    </button>
  `;
};