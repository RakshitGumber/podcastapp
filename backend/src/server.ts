import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import home from "./routes/home";

config();

const app: Express = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public", "client")));

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use("/", home);

app.listen(process.env.PORT, (): void => {
  console.log("server started at http://localhost:" + process.env.PORT);
});
