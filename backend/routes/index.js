const express = require('express');
const router = express.Router();
 
const authRouter = require('./auth.routes');
const productRouter = require('./products.routes');
 
router.use('/user', authRouter);
router.use('/product', productRouter);
 
 
module.exports = router;