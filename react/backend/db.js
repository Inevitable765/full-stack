const mongoose = require('mongoose');
const colors = require('colors')
const dbConnect = async() => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/Ecommerce');
    console.log(colors.blue('Connection Successfull'))
  } catch (error) {
    console.log(colors.red(error))
  }
};

module.exports = dbConnect ;
