import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


import chalk from "chalk";

const URL = process.env.MONGODB_URL;

const connectedDB = async () => {
    try {
        await mongoose.connect(URL, { dbName: "TaskManager" }); // spelling corrected
        console.log(chalk.bgGreen.white('Connected to MongoDB ✅'));
    } catch (error) {
        console.error(chalk.bgRed.white("Error in connecting to DB ❌", error));
    }
};

export default connectedDB;
