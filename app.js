const PORT = 3030;
const path = require('node:path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
});