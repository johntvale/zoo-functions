const { species, prices } = require('./data');
const data = require('./data');

const { employees } = data;
const { Adult, Senior, Child } = prices;

function getSpeciesByIds(...ids) {
  // Requisito 1
  const resultArray = [];

  if (ids.length !== 0) {
    ids.forEach((eachId) => {
      resultArray
        .push(species
          .find((eachSpecie) => eachSpecie.id === eachId));
    });
    return resultArray;
  }
  return resultArray;
}

function getAnimalsOlderThan(animal, age) {
  // Requisito 2
  const foundSpecies = species
    .find((eachSpecie) => eachSpecie.name === animal);
  if (foundSpecies.residents.every((foundSpecie) => foundSpecie.age >= age)) {
    return true;
  }
  return false;
}

function getEmployeeByName(employeeName) {
  // Requisito 3
  if (!employeeName) return {};

  const foundByFirsftName = employees.find((employee) => employee.firstName === employeeName);
  const foundByLastName = employees.find((employee) => employee.lastName === employeeName);

  if (foundByFirsftName) return foundByFirsftName;
  if (foundByLastName) return foundByLastName;
}

function createEmployee(personalInfo, associatedWith) {
  // Requisito 4
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // Requisito 5
  const person = employees.find((employee) => employee.id === id);
  if (person.managers.length !== 2) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Requisito 6
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(recSpecie) { // alterei 'species' por 'recSpecie' para corrigir o lint
  // Requisito 7
  const resultObject = {};

  const resultNoName = species.map((eachSpecie) => eachSpecie.name);
  const resultQtyNoName = species.map((eachSpecie) => eachSpecie.residents.length);

  if (!recSpecie) {
    resultNoName.forEach((name, index) => {
      resultObject[name] = resultQtyNoName[index];
      return 0;
    });
    return resultObject;
  }

  return species.find((foundSpecie) => foundSpecie.name === recSpecie).residents.length;
}

function calculateLength1(entrants) { // Teste 1 Requisito 8
  const keyName = Object.keys(entrants)[0];
  const value = Object.values(entrants)[0];

  if (keyName === 'Adult') {
    const calculatedEntry1 = value * Adult * 100;
    return calculatedEntry1 / 100;
  } if (keyName === 'Senior') {
    const calculatedEntry2 = value * Senior * 100;
    return calculatedEntry2 / 100;
  } if (keyName === 'Child') {
    const calculatedEntry3 = value * Child * 100;
    return calculatedEntry3 / 100;
  }
}

function calculateLength2(entrants, arrPricesOrdered) { // Teste 2 Requisito 8
  const arrPricesChildSenior = arrPricesOrdered.slice(1);
  const valuesCS = Object.values(entrants);
  const calculatedEntry4 = valuesCS
    .map((valueCS, index) => valueCS * arrPricesChildSenior[index] * 100)
    .reduce((accumulator = 0, actualValue = calculatedEntry4[0]) =>
      accumulator + actualValue) / 100;
  return calculatedEntry4;
}

function calculateLength3(entrants, arrPricesOrdered) { // Teste 3 Requisito 8
  const recValues = Object.values(entrants);
  const calculatedEntry5 = recValues
    .map((recValue, index) => recValue * arrPricesOrdered[index] * 100)
    .reduce((accumulator = 0, actualValue = calculatedEntry5[0]) =>
      accumulator + actualValue) / 100;
  return calculatedEntry5;
}

function calculateEntry(entrants) {
  // Requisito 8
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const arrPricesOrdered = [Adult, Child, Senior];

  if (Object.values(entrants).length === 1) return calculateLength1(entrants);

  if (Object.values(entrants).length === 2) return calculateLength2(entrants, arrPricesOrdered);

  return calculateLength3(entrants, arrPricesOrdered);
}

function getAnimalMap(options) {
  // Requisito 9
}

function getSchedule(dayName) {
  // Requisito 10
}

function getOldestFromFirstSpecies(id) {
  // Requisito 11
}

function increasePrices(percentage) {
  // Requisito 12
  /* Recebi ajuda dos amigos da turma: Recuperar o objeto como "array de arrays" e depois
  criar um novo objeto para substituir o anterior(objeto original), facilita a interpretação */
  const replacePrices = {};
  Object.entries(data.prices)
    .forEach((eachPrice) => {
      const keyPrice = eachPrice[0];
      const valuePrice = eachPrice[1];
      const actualPrice = (valuePrice * percentage) / 100;
      replacePrices[keyPrice] = Math.round((valuePrice + actualPrice) * 100) / 100;
    });
  data.prices = replacePrices;
}

function getEmployeeCoverage(idOrName) {
  // Requisito 13
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
