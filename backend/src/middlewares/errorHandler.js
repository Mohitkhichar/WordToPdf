module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
    });
  };
  