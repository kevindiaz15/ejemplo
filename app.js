const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("mi primer API");
});

app.listen(3000, () => {
    console.log("el servidor esta activo en el puerto 3000");
})