var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
app.get('/', (req, res) => {
    res.json({status: "ok"});
})
app.listen(PORT, function () {
    console.log(`Server listening at port: ${PORT}!`);
});