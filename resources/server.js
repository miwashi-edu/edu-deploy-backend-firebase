const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({status:"success"});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});