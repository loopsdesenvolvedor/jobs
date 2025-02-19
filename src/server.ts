app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  express.static(join(__dirname, "..", "public"), {
    maxAge: "1d",
  })
);

