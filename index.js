const express = require("express");
const app = express();
const route = require("./routes/v1/route");

const PORT = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    res.json("Hello World!");
});

app.use("/api/v1", route);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;