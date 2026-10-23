// import mongoose from "mongoose";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       dbName: "rn-server1",
//     });

//     console.log("Mongo Db connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDb;
import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully");
};

export default connectDb;