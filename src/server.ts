import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { join } from "path";

import { routes } from "./routes";
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(400).json({
      error: error.message,
    });
    return;
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return;
});

app.listen(port, () => {
  console.log(`App is runing on port: ${port}`);
});
