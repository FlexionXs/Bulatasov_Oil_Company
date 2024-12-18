//имопрт пула БД
const pool = require("../db");
const queries = require("../queries");

const procAddCooperator = (req, res) => {
  const { last_name, name, birthday, city, dept_name, comp_name } = req.body; // извлекаем данные из тела объекта

  pool.query(
    queries.procAddCooperator,
    [last_name, name, birthday, city, dept_name, comp_name],
    (error, results) => {
      if (error) throw error; //если есть ошибка, то вывести сообщение об ошибке
      res.status(200).send("Cooperator insered");
      //console.log("Cooperator insered");
    }
  );
};

const procUpdateSalary = (req, res) => {
  const percent = parseInt(req.params.percent); // извлекаем значение пронцента ув.зарплаты из параметра
  pool.query(queries.procUpdateSalary, [percent], (error, results) => {
    if (error) throw error;
    res.status(200).send("Salary upadate successfully");
  });
};

const procRemoveCooperator = (req, res) => {
  pool.query(queries.procRemoveCooperator, (error, results) => {
    if (error) throw error;
    res.status(200).send("Cooperator remove successfuly");
  });
};

module.exports = {
  procAddCooperator,
  procUpdateSalary,
  procRemoveCooperator,
};
