function toCamelCase(value) {
  // What...
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function convertValidations(validations) {
  let errors = {};
  for (let error of validations.errors) {
    // Iterate through every errors, and extract the last value.
    let property = error.property.slice(error.property.lastIndexOf('.') + 1);
    if (property === 'instance') property = '_error';
    // If already occupied, just continue. (Most important errors are placed
    // on the top I guess)
    if (errors[property]) continue;
    // Required needs special handling too
    if (error.name === 'required') {
      errors[error.argument] = {
        name: 'ErrorValidationRequired',
        values: error.argument
      };
      continue;
    }
    // Special case - if minLength error and instance length is 0...
    if (error.name === 'minLength' &&
      validations.instance[property] != null &&
      validations.instance[property].length === 0
    ) {
      errors[property] = {
        name: 'ErrorValidationRequired',
        values: property
      };
      continue;
    }
    if (error.name === 'type') {
      const type = error.argument[0];
      errors[property] = {
        name: 'ErrorValidationType' + toCamelCase(type),
        values: error.argument
      };
      continue;
    }
    // If not, create and place translation key.
    errors[property] = {
      name: 'ErrorValidation' + toCamelCase(error.name),
      values: error.argument
    };
  }
  return errors;
}
