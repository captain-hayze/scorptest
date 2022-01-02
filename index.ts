import express from "express";
import helmet from "helmet";
import noCache from "nocache";
import cors from "cors";
import * as dotenv from "dotenv";
import ScorpTestRoutes from "./src/routes/scorpTest.routes";
import {
  errorHandler,
  notFoundHandler,
} from "./src/middleware/error.middleware";

dotenv.config();

const app: any = express();

app.use(cors());
app.use(noCache());
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", ScorpTestRoutes);
app.get("/", (_req, res) => {
  res.end("Running!!!");
});

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚨 Server is listening at http://localhost:${PORT}`);
});
