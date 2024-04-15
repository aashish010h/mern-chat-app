import mongoose from "mongoose";
const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("conncetd to mongodb");
  } catch (error) {
    console.log("Error conncting to MongoDb", error.message);
  }
};
export default connectToMongoDb;
