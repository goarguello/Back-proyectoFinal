const mongoose = require('mongoose');

const connectionDB = async () => {
  try {
    mongoose.connect(process.env.DB_URI)
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
  }
}


module.exports = connectionDB