import './Input.scss';
import type { InputProps } from './input.type';

export const Input = ({
  type = 'text',
  size = 'md',
  placeholder = '',
  value = '',
  error = '',
  disabled = false,
  onChange,
  ariaLabel,
  ariaDescribedBy,
  ariaRequired,
  ariaInvalid,
}: InputProps): HTMLDivElement => {

  // ─── Wrapper ───────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.className = 'input-wrapper';

  // ─── Input ─────────────────────────────────────
  const input = document.createElement('input');

  input.className = [
    'input',
    `input--${size}`,
    error ? 'input--error' : '',
    disabled ? 'input--disabled' : '',
  ].join(' ').trim();

  input.type = type;
  input.placeholder = placeholder;
  input.value = value;
  input.disabled = disabled;

  // ─── Accessibility ─────────────────────────────
  input.setAttribute('aria-disabled', String(disabled));

  if (ariaLabel) {
    input.setAttribute('aria-label', ariaLabel);
  }
  if (ariaDescribedBy) {
    input.setAttribute('aria-describedby', ariaDescribedBy);
  }
  if (ariaRequired) {
    input.setAttribute('aria-required', String(ariaRequired));
  }
  if (error || ariaInvalid) {
    input.setAttribute('aria-invalid', 'true');
  }

  // ─── onChange ──────────────────────────────────
  if (typeof onChange === 'function') {
    input.addEventListener('change', onChange);
  }

  // ─── Error Message ─────────────────────────────
  wrapper.appendChild(input);

  if (error) {
    const errorMsg = document.createElement('span');
    errorMsg.className = 'input__error-msg';
    errorMsg.textContent = error;
    // Screen reader error message ke liye
    errorMsg.setAttribute('role', 'alert');
    errorMsg.id = ariaDescribedBy || 'input-error';
    wrapper.appendChild(errorMsg);
  }

  return wrapper;
};