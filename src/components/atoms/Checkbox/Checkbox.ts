import './Checkbox.scss';
import { CheckboxProps } from './Checkbox.type';

export const Checkbox = ({
  label = 'Label',
  checked = false,
  disabled = false,
  ariaLabel,
  ariaRequired = false,
}: CheckboxProps): string => {
  return `
    <div class="checkbox ${disabled ? 'checkbox--disabled' : ''}">

      <input
        type="checkbox"
        class="checkbox__input"
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
        aria-checked="${checked}"
        aria-disabled="${disabled}"
        ${ariaRequired ? 'aria-required="true"' : ''}
        ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
      />

      <label class="checkbox__label">
        ${label}
        ${ariaRequired ? '<span class="checkbox__required" aria-hidden="true">*</span>' : ''}
      </label>

    </div>
  `;
};