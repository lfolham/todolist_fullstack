const validadeBody = (req, res, next) => {
  const { body } = req;

  if(body.title === undefined) {
    return res.status(400).json({ message: 'title is required'});
  }

    if(body.title === '') {
    return res.status(400).json({ message: 'canot be empty'});
  }
  next();
};

module.exports = {
  validadeBody,
}