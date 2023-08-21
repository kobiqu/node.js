const userService = require("../userService ");

const getAllItems = async (req, res) => {
  // get all items
  try {
    const data = await userService.getAllItems();
    res.send(data);
  } catch (err) {
    console.error(
      "at controllers.js, line 6, func (getallItems)" + " " + err.message
    );
    res.status(400).send(err);
  }
};
const getItemById = async (req, res) => {
  // get item by id

  try {
    const data = await userService.getItemById(req.params.id);
    res.send(data);
  } catch (err) {
    console.error(
      "at controllers.js, line 15, func (getItemById)" + " " + err.message
    );
    res.status(400).send(err);
  }
};
const newItem = async (req, res) => {
  // add item

  try {
    const data = await userService.newItem(req.body);
    res.send(data);
  } catch (err) {
    console.error(
      "at controllers.js, line 24, func (newItem)" + " " + err.message
    );
    res.status(400).send(err);
  }
};
const editItem = async (req, res) => {
  // update item

  try {
    const data = await userService.editItem(req.body);
    res.send(data);
  } catch (err) {
    console.error(
      "at controllers.js, line 33, func (editItem)" + " " + err.message
    );
    res.status(400).send(err);
  }
};
const deleteItem = async (req, res) => {
  // delete item

  try {
    const data = await userService.deleteItem(req.params.id);
    res.send(data);
  } catch (err) {
    console.error(
      "at controllers.js, line 42, func (deleteItem)" + " " + err.message
    );
    res.status(400).send(err);
  }
};
const upQuantity = async (req, res) => {
  // update quantity

  try {
    const data = await userService.upQuantity(req.params.id, req.params.value);
    res.send(data + "kobi");
  } catch (err) {
    console.error(err);
    res.send(
      "at controllers.js, line 53, func (upQuantity)" + " " + err.message
    );
    res.status(400).send(err);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  editItem,
  newItem,
  deleteItem,
  upQuantity,
};
