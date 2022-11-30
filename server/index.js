import express from "express";
import cors from "cors";
const PORT = 8082;
const app = express();

app.use(cors());

var count = 0;
app.get("/adduser", (req, res) => {
  count++;
  res.send({ name: `User${count}` });
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
