// backend/routes/index.js
const express = require('express');
const router = require('express').Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;