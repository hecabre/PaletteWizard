import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import colorRoutes from "./routes/api.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.use(colorRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
