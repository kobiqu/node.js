const express = require("express");
const app = express();
const router = require("./routes/router");

app.use(express.json());
app.use(express.text());
app.use(router);

const PORT = 8200;
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
