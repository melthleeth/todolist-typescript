export interface Validatable {
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required)
    isValid = isValid && validatableInput.value.trim().length !== 0;

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  )
    isValid =
      isValid && validatableInput.value.length > validatableInput.minLength;

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  )
    isValid =
      isValid && validatableInput.value.length < validatableInput.maxLength;

  return isValid;
}
