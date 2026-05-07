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
}: InputProps): HTMLInputElement => {

  const input = document.createElement('input');

  // ─── Classes ─────────────────────────────────────
  input.className = [
    'input',
    `input--${size}`,
    error ? 'input--error' : '',
    disabled ? 'input--disabled' : '',
  ].join(' ').trim();

  // ─── Attributes ──────────────────────────────────
  input.type = type;
  input.placeholder = placeholder;
  input.value = value;
  input.disabled = disabled;

  // ─── Accessibility ───────────────────────────────
  input.setAttribute('aria-disabled', String(disabled));
  if (error) {
    input.setAttribute('aria-invalid', 'true');
  }

  // ─── Events ──────────────────────────────────────
  if (typeof onChange === 'function') {
    input.addEventListener('change', onChange);
  }

  return input;
};