import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colorRoutes from "./routes/api.routes.js";

dotenv.config({path: 'server/.env'});
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(colorRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
