const userDal = require("./dal/userDal");

const getAllItems = async () => {
  // get all items

  try {
    const data = await userDal.getAllItems();
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 3, func (getAllItems)" + " " + err.message
    );
  }
};
const getItemById = async (id) => {
  // get item by id

  try {
    const data = await userDal.getItemById(id);
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 12, func (getItemById)" + " " + err.message
    );
  }
};
const newItem = async (item) => {
  // add item

  try {
    const data = await userDal.newItem(item);
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 21, func (newItem)" + " " + err.message
    );
  }
};
const editItem = async (item) => {
  // update item

  try {
    const data = await userDal.editItem(item);
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 30 , func (editItem)" + " " + err.message
    );
  }
};
const deleteItem = async (id) => {
  // delete item

  try {
    const data = await userDal.deleteItem(id);
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 39 , func (deleteItem)" + " " + err.message
    );
  }
};
const upQuantity = async (id, value) => {
  // update quantity

  try {
    const data = await userDal.upQuantity(id);
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 48, func (upQuantity)" + " " + err.message
    );
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
