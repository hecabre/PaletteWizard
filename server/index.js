import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colorRoutes from "./routes/api.routes.js";
import paymentRoutes from "./routes/payments.routes.js";

dotenv.config({ path: "server/.env" });
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(colorRoutes);
app.use(paymentRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
