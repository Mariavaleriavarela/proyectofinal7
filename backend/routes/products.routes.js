const express = require('express');
const router = express.Router();
 
const { readAll, readOne, create, update, remove } = require('../controllers/products.controllers');
 
router.post("/create", create);
router.get("/readall", readAll);
router.get("/readone/:id", readOne);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);
 
module.exports = router;