const { species } = require('./data');
const data = require('./data');

const { employees } = data;

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

  // sem parâmetros
  const resultNoName = species.map((eachSpecie) => eachSpecie.name);
  const resultQtyNoName = species.map((eachSpecie) => eachSpecie.residents.length);

  if (!recSpecie) {
    resultNoName.forEach((name, index) => {
      resultObject[name] = resultQtyNoName[index];
      return 0;
    });
    return resultObject;
  }

  // com parâmetros
  return species.find((foundSpecie) => foundSpecie.name === recSpecie).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
