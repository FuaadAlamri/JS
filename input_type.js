function input_type(value) {
  if (isNaN(value)) {
    return "string";
  } else if (Number.isInteger(Number(value))) {
    return "integer";
  } else {
    return "double";
  }
}
