const { species } = require('./data');
const data = require('./data');

const { employees } = data;

function getSpeciesByIds(...ids) {
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
} // Requisito 1

function getAnimalsOlderThan(animal, age) {
  const foundSpecies = species
    .find((eachSpecie) => eachSpecie.name === animal);
  if (foundSpecies.residents.every((foundSpecie) => foundSpecie.age >= age)) {
    return true;
  }
  return false;
} // Requisito 2

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const foundByFirsftName = employees.find((employee) => employee.firstName === employeeName);
  const foundByLastName = employees.find((employee) => employee.lastName === employeeName);

  if (foundByFirsftName) return foundByFirsftName;
  if (foundByLastName) return foundByLastName;
} // Requisito 3

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
} // Requisito 4

function isManager(id) {
  const person = employees.find((employee) => employee.id === id);
  if (person.managers.length !== 2) return true;
  return false;
} // Requisito 5

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
