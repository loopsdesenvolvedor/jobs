import express, { Request, Response, NextFunction } from "express";
import { join } from "path";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.set("views", join(__dirname, "..", "views"));
app.use(express.static(join(__dirname, "..", "public")));
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internl server error",
  });
});

app.listen(process.env.PORT),
  () => {
    console.log(`App is running! Port: ${process.env.PORT}`);
  };
