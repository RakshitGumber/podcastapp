import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import connection from "./db/index.js";
import { fileURLToPath } from "url";
import home from "./routes/home/index.js";
import api from "./routes/api/index.js";
import signup from "./routes/signup/index.js";
config();
const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use("/", home);
app.use("/signup", signup);
app.use("/api", api);
Promise.all([connection()])
  .then(() => {
    console.log("Server connected to the database");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server started at http://localhost:" + process.env.PORT);
    });
  });
