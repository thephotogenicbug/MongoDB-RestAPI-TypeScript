import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import connectDB from "./config/mongodb";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
