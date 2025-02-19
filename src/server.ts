import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { join } from "path";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  express.static(join(__dirname, "..", "public"), {
    maxAge: "1d",
  })
);

app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({
      message: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
