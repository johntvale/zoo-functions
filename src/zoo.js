const { species } = require('./data');
const data = require('./data');

const { employees } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
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
  // seu código aqui
  const foundSpecies = species
    .find((eachSpecie) => eachSpecie.name === animal);
  if (foundSpecies.residents.every((foundSpecie) => foundSpecie.age >= age)) {
    return true;
  }
  return false;
}

function getEmployeeByName(employeeName) {
  // seu código aqui

  if (!employeeName) return {};

  const foundByFirsftName = employees.find((employee) => employee.firstName === employeeName);
  const foundByLastName = employees.find((employee) => employee.lastName === employeeName);

  if (foundByFirsftName) return foundByFirsftName;
  if (foundByLastName) return foundByLastName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(allSpecies) { // alterei 'species' por 'allSpecies' para corrigir o lint
  // seu código aqui
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
