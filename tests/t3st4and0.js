// Write your tests here.

const app = require("./index.js");
const persons = app.persons
let keepgoing = true
const createdPersons = [{name: 'Lauro', age: 15, gender: 'M', isActive: true}]

app.createPerson('Lauro', 15, 'M')
function testCreatePerson() {
    if(keepgoing == true){
        if (createdPersons[0].name == persons[0].name 
            && createdPersons[0].age ==  persons[0].age 
            && createdPersons[0].gender == persons[0].gender
            && persons[0].isActive == true){
            console.log('testCreatePersonResult: working normaly');}
    
        else {
            let testResult = "testCreatePersonTest result:"
    
            if(persons[0].isActive != true || persons[0].isActive != createdPersons[0].isActive){
                testResult += 'isActive, '
            }
            if(persons[0].name != createdPersons[0].name){
                testResult += 'name, '
            }
            if(persons[0].age != createdPersons[0].age){
               testResult += 'age, '
            }
            if(persons[0].gender != createdPersons[0].gender){
                testResult += 'gender, '
            }
    
            testResult += `are not working`
            console.log(testResult);
            keepgoing = false
        }
        persons.pop()
        createdPersons.pop()
    }
}



function testDeactivatePerson(){
    if(keepgoing == true){
        persons.push({ id: 1, name: 'Lauro', age: 15, gender: 'M', isActive: true })
        app.deactivatePersonById(1)
        if (persons[0].isActive == false) {
            console.log('testDeactivatePersonResult: working normaly');
        }else {
            console.log('testDeactivatePersonResult: deactivation faild');
            keepgoing = false
        }
        persons.pop()
    }
}




function testGetActivePerson(){
    if(keepgoing == true){
        persons.pop()
        persons.push({ id: 1, name: 'Lauro', age: 15, gender: 'M', isActive: false},
         { id: 3, name: 'Bruno', age: 24, gender: 'M', isActive: true}, { id: 2, name: 'Iza', age: 22, gender: 'F', isActive: true})
        let i = 0
        const activePersons = app.getActivePersons()
        while (i < activePersons.length) {
            const person = activePersons[i]
            if (person.isActive == true) {
                i++
            }else{
                console.log(`testGetActivePersonResult: test faild --> inactive person returned`);
                keepgoing = false
                return 0

            }if (i == persons.length){
                console.log('testGetActivePersonResult: working normaly');
            }
        }
    }
    persons.pop()
}
testCreatePerson()
testGetActivePerson()
testDeactivatePerson()