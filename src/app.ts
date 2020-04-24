import * as express from "express";

import routes from "./routes/routes";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));

app.use("/", routes);

export default app;
