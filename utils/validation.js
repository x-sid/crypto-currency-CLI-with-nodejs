const isRequired = (input) => {
  return input === "" ? "This value is required" : true;
};

module.exports = isRequired;
