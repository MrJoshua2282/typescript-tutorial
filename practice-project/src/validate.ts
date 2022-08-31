export interface Validable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
export function validate(validableInput: Validable): boolean {
  let isValid = true;

  if (validableInput.required) {
    isValid = isValid && validableInput.value.toString().trim().length !== 0;
  }

  if (typeof validableInput.value === 'string' && validableInput.minLength != null) {
    isValid = isValid && validableInput.value.length >= validableInput.minLength;
  }

  if (typeof validableInput.value === 'string' && validableInput.maxLength != null) {
    isValid = isValid && validableInput.value.length <= validableInput.maxLength;
  }

  if (typeof validableInput.value === 'number' && validableInput.min != null) {
    isValid = isValid && validableInput.value >= validableInput.min;
  }

  if (typeof validableInput.value === 'number' && validableInput.max != null) {
    isValid = isValid && validableInput.value <= validableInput.max;
  }

  return isValid
}
