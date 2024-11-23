const { saveFile, getDocuments } = require('../utils/fileHelper');

exports.uploadDocument = async (req, res, next) => {
  try {
    const file = req.body.file; // Assume Base64 encoded or file path.
    const savedFile = await saveFile(file);
    res.status(201).json({ message: 'File uploaded successfully', file: savedFile });
  } catch (error) {
    next(error);
  }
};

exports.listDocuments = async (req, res, next) => {
  try {
    const documents = await getDocuments();
    res.status(200).json(documents);
  } catch (error) {
    next(error);
  }
};
