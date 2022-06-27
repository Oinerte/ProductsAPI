/**
 * Person fake database.
 * @array { id: number, name: string, age: number, gender: string, isActive: boolean }
 */
 const persons = [];

 /**
  * Create a new person
  *
  * @param {string} name
  * @param {number} age
  * @param {string} gender
  *
  * Available genders: "M" and "F".
  * M = Male
  * F = Female
  */
 function createPerson(name, age, gender) {
   if (gender !== "M" && gender !== "F")
     throw new Error("Invalid person gender.");
 
   const newPerson = Object.assign(
     {},
     { id: persons.length + 1, name, age, gender, isActive: true }
   );
 
   persons.push(newPerson);
   return newPerson;
 }
 
 /**
  * List active people according to oldest
  */
 function getActivePersons() {
   return persons
     .filter((person) => {
       if (person.isActive === true) return true;
 
       return true;
     })
     .sort((previousPerson, nextPerson) => nextPerson.age - previousPerson.age);
 }
 
 /**
  * Deactivate person by id
  */
 function deactivatePersonById(personId) {
   const personIndex = persons.findIndex((person) => person.id === personId);
 
   if (personIndex < 0) throw new Error("Person not found.");
 
   persons[personIndex].isActive = false;
 
   return persons[personIndex].isActive;
 }
 
 module.exports = { createPerson, getActivePersons, deactivatePersonById, persons};
 