const DATA = "./dal/data.json";
const jsonfile = require("jsonfile");

const getAllItems = async () => {
  // get all items

  try {
    const data = await jsonfile.readFile(DATA);
    return data;
  } catch (err) {
    console.error(
      "at userDal.js, line 4, func (getAllItems)" + " " + err.message
    );
    return err;
  }
};
const getItemById = async (id) => {
  // get item by id

  try {
    const data = await jsonfile.readFile(DATA);
    console.log(data);
    return data[id - 1];
  } catch (err) {
    console.error(
      "at userDal.js, line 3, func (getAllItems)" + " " + err.message
    );
    return err;
  }
};
const newItem = async (item) => {
  // add item

  try {
    const data = await jsonfile.readFile(DATA);
    data.push(item);
    return data;
  } catch (err) {
    console.error("at userDal.js, line 29, func (newItem)" + " " + err.message);
    return err;
  }
};
const editItem = async (item) => {
  // this func takes the keys from the request,
  //  checks if he exist and change the value of the db

  try {
    let keys = Object.keys(item);
    const data = await jsonfile.readFile(DATA);
    for (let i = 0; i < data.length; i++) {
      if (item.id === data[i].id) {
        data[i][keys[0]] = item[keys[1]];
        return data;
      }
    }
  } catch (err) {
    console.error(
      "at userDal.js, line 42, func (editItem)" + " " + err.message
    );
    return err;
  }
};
const deleteItem = async (position) => {
  // this func delete user from the db by id witch gave by the clint side

  try {
    const data = await jsonfile.readFile(DATA);
    data.splice(position - 1, 1);
    return data;
  } catch (err) {
    console.error(
      "at userDal.js, line 62, func (deleteItem)" + " " + err.message
    );
    return err;
  }
};
const upQuantity = async (position, value) => {
  try {
    const data = await jsonfile.readFile(DATA);
    data[position - 1].rating.count = value;
    return data;
  } catch (err) {
    console.error(
      "at userDal.js, line 75, func (upQuantity)" + " " + err.message
    );
    return err;
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
