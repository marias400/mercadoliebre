const PORT = 80;
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

app.get("/views/home.html", (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
});

app.get("/views/login.html", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
});

app.get("/views/register.html", (req, res) => {
    res.sendFile(path.resolve("views/register.html"));
});