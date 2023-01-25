const errorMap = {
  NOT_FOUND: 404,
};

function mapError(type) {
  return errorMap[type] || 500;
}

module.exports = {
  errorMap,
  mapError,
};