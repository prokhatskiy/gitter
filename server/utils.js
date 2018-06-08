module.exports = {
  handleSuccess: function (res) {
    return function (data) {
      res.send(data);
    }
  },
  handleError: function (res) {
    return function (err) {
      res.status(err.statusCode);
      res.send(err.error);
    }
  }
};