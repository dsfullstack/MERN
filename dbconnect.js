const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://sumandhal96:admin@cluster0.enpqfyv.mongodb.net/?retryWrites=true&w=majority");
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDb;

/// 


