// Запросы
const getCooperator = "SELECT * FROM cooperator";
const getCooperatorById = "SELECT * FROM cooperator WHERE cooperator_id = $1";
const addCooperator = "INSERT INTO cooperator (last_name, name, birthday, city, dept_id) VALUES ($1, $2, $3, $4, $5)";
const updateCooperator = "UPDATE cooperator SET last_name = $1 WHERE cooperator_id = $2";
const removeCooperator = "DELETE FROM cooperator WHERE cooperator_id = $1";
const checkLastnameCooperator = "SELECT c FROM cooperator c WHERE c.last_name = $1";

//Вызов хранимой процедуры БД
const procAddCooperator = "call proc_insert_cop($1, $2, $3, $4, $5, $6)"; //процедура добавления сотрудника с проверкой (по фамилии и имени), если уже есть такой сотрудник, тогда запись не добавляется
const procUpdateSalary = "call proc_increase_salary($1)"; //процедура процедуру, которая увеличит зарплату у сотрудников в таблице cooperator. При вызове процедура передается значение % на который будет увеличена зарплата. Условие увеличения зарплаты для каждого сотрудника, если у него среднее значение аттестации больше 4 и последняя оценка равна 5
const procRemoveCooperator = "call proc_delete_cooperator()"; //процедура, которая будет удалять сотрудника из отдела, если у него есть две оценки со значением 2. Процедура без входных параметров

//Вызов пользовательской функции БД
const func_SelectCooperator = "select * from func_SelectCooperator($1, $2, $3)"; //по введенному идентификатору выводит сотрудника
const func_CountCooperator = "select * from func_CountCooperator($1)"; //табличная функция, которая будет выводить количество сотрудников «отличников», «хорошистов», «троечников» из заданного отдела
const func_InsertCooperator = "select * from func_InsertCooperator($1, $2, $3)"; //функция добавляющая запись о сотруднике в таблицу Cooperator при условии, что такого сотрудника нет в этой таблице. Проверка выполняется по фамилии, имени, дате рождения.


module.exports = {
  getCooperator,
  getCooperatorById,
  addCooperator,
  updateCooperator,
  removeCooperator,
  checkLastnameCooperator,

  procAddCooperator,
  procUpdateSalary,
  procRemoveCooperator,

  func_SelectCooperator,
  func_CountCooperator,
  func_InsertCooperator
}
