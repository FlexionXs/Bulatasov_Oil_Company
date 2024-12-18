const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello World"); //метод get получает параметры: 1) url, 2) функцию collback с параметрами запрос и ответ
});

const queryRoutes = require("./routes/queryRouter"); 
app.use("/api/query", queryRoutes);

const procedureRoutes = require("./routes/procedureRouter");
app.use("/api/procedure", procedureRoutes);

const functionRoutes = require("./routes/functionRouter");
app.use("/api/function", functionRoutes);

require("dotenv").config(); // библиотека dotenv загружает переменные среды из файла .env

const port = process.env.port;

app.listen(port, () => console.log(`Сервер запущен! ${port}`));