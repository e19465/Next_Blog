const { v4: uuidv4 } = require("uuid");

function getUniqueNameForDP(fileName, userId, imageId) {
  const uniqueId = uuidv4();
  const newFileName = `${userId}_${imageId}_${uniqueId}_${fileName}`;
  return newFileName;
}

module.exports = { getUniqueNameForDP };
