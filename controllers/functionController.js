//имопрт пула БД
const { parse } = require("dotenv");
const pool = require("../db");
const queries = require("../queries");
//const { param } = require("../routes/functionRouter");

//pool.query применяется для вызова пользовательской функции с параметрами
const func_SelectCooperator = (req, res) => {
  const { last_name, name, birthday } = req.body; // извлекаем данные из тела json объекта
  pool.query(
    queries.func_SelectCooperator,
    [last_name, name, birthday],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const func_CountCooperator = (req, res) => {
  const name_dep = req.params.name_department; // извлекаем данные из параметра
  pool.query(queries.func_CountCooperator, [name_dep], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const func_InsertCooperator = (req, res) => {
  const {last_name, name, birthday} = req.body; // извлекаем данные из тела json объекта
  pool.query(
    queries.func_InsertCooperator,
    [last_name, name, birthday],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

//экспорт созданного модуля
module.exports = {
  func_SelectCooperator,
  func_CountCooperator,
  func_InsertCooperator,
};
