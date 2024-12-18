const express = require('express');

const {body, validationResult} = require('express-validator');
const passport = require("passport");
const YandexStrategy = require("passport-yandex");
const session = require("express-session");


const app = express();

app.use(express.json());

const path = require("path");
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

//Для тестирования работы сервера
app.get("/", (req, res) => {
  //res.send("Hello"); //метод get получает параметры: 1) url, 2) функцию collback с параметрами запрос и ответ
  res.sendFile(path.join(publicPath, "login.html")); // Отправляем файл index.html при запросе на корневой URL
});


const queryRoutes = require("./routes/queryRouter"); 
app.use("/api/query", queryRoutes);

const procedureRoutes = require("./routes/procedureRouter");
app.use("/api/procedure", procedureRoutes);

const functionRoutes = require("./routes/functionRouter");
app.use("/api/function", functionRoutes);

const cookieParser = require("cookie-parser");
app.use(cookieParser()); // Теперь можно устанавливать и извлекать файлы cookie, используя объекты res и req соответственно.


require("dotenv").config(); // библиотека dotenv загружает переменные среды из файла .env

const port = process.env.port;

app.listen(port, () => console.log(`Сервер запущен! ${port}`));