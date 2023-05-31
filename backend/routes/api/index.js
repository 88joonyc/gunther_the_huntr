router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });