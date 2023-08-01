import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "NEXTLOGANDOUT",
    });
    console.log(`connection on ${connection.host}`);
  } catch (error) {
    //console.log(error);
  }
}
