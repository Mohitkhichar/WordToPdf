const fs = require('fs').promises;
const path = require('path');

const storageDir = path.join(__dirname, '..', '..', 'uploads');

exports.saveFile = async (file) => {
  const filePath = path.join(storageDir, file.name);
  await fs.writeFile(filePath, file.content, 'base64');
  return { path: filePath, name: file.name };
};

exports.getDocuments = async () => {
  const files = await fs.readdir(storageDir);
  return files.map((file) => ({ name: file, path: path.join(storageDir, file) }));
};
