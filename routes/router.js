const express = require("express");
const {
  getItemById,
  getAllItems,
  newItem,
  editItem,
  deleteItem,
  upQuantity,
} = require("../controllers/controllers");

const router = express.Router();

// get all items
router.get("/all", getAllItems);

// get item by id
router.get("/all/:id", getItemById);

// add item
router.post("/all/new", newItem);

// update item
router.put("/all/edit", editItem);

// delete item
router.delete("/all/delete", deleteItem);

// update quantity
router.put("/all/edit/:id", upQuantity);

module.exports = router;
