const mongoose = require("mongoose");
DatabaseConnection();
async function DatabaseConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://shekabhi1208:HappinessFourAbhishek@cluster0.vtfst.mongodb.net/JobHuntLocal",
      { useNewUrlParser: true }
    );
    console.log("Mongo Db connection sucessful");
  } catch (error) {
    console.log("Connection failed");
  }
}
module.exports = mongoose;
