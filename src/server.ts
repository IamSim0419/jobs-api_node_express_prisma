import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Jobs API running 🚀" }));

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
