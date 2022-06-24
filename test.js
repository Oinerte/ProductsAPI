// Write your tests here.

const app = require("./index.js");

const createdPersons = [{name: 'Lauro', age: 15, gender: 'M', isActive: true}, {name: 'Isa', age: 16, gender: 'F', id: 2, isActive: true}]


function testCreatePerson(testPerson, indexPerson) {

    if (testPerson.name == indexPerson.name 
        && testPerson.age ==  indexPerson.age 
        && testPerson.gender == indexPerson.gender
        && indexPerson.isActive == true){
        console.log('testCreatePersonResult: working normaly');}
    else {
        let testResult = "testCreatePersonTest result:"

        if(indexPerson.isActive != true || indexPerson.isActive != testPerson.isActive){
            testResult += 'isActive, '
        }
        if(indexPerson.name != testPerson.name){
            testResult += 'name, '
        }
        if(indexPerson.age != testPerson.age){
           testResult += 'age, '
        }
        if(indexPerson.gender != testPerson.gender){
            testResult += 'gender, '
        }

        testResult += `are not working`
        console.log(testResult);
    }
}

testCreatePerson(createdPersons[1], app.createPerson('Isa', 16, 'F'))


app.createPerson('Isa', 16, 'F');

let deactivatedPersons = 0
function testDeactivatePerason(id){
    if (app.deactivatePersonById(id) == false ) {
        console.log('testDeactivatePersonResult: working normaly');
        deactivatedPersons++
    }else {
        console.log('testDeactivatePersonResult: test faild');
    }
}


function testGetActivePerson(){
    if (app.getActivePersons().length == createdPersons.length - deactivatedPersons) {
        console.log(`testGetActivePersonResult: working normaly`);
    }else if (app.getActivePersons().length < createdPersons.length - deactivatedPersons){
        console.log(`testGetActivePersonResult: test faild --> less active persons than expected`);
    } 
    else{
        console.log(`testGetActivePersonResult: test faild --> more active persons than expected`);       
    }
}

testGetActivePerson()

testDeactivatePerason(2)

testGetActivePerson()