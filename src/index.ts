import express, { type Request, type Response } from "express";

// import middlewares
import morgan from "morgan";

import itemsRoutes from "./routes/itemsRoutes";
import usersRoutes from "./routes/usersRoutes";

const app = express();
const port = 3000;

// body parser middleware
app.use(express.json());

// logger middleware
app.use(morgan("dev"));
// app.use(morgan("combined"));

// Endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Quiz #2 - API service");
});

app.get("/me", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Quiz #2 - API service",
  });
});

app.get("/myinfo", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Student Information",
    data: {
      "studentId": "680610697",
      "firstname": "Pobphut",
      "lastname": "Kungwong",
      "section": "001"
    }
  });
});


app.use("/api/v697", usersRoutes);
app.use("/api/v697/cart/:userId", itemsRoutes);


app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

// Export app for vercel deployment
export default app;
