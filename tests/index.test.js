const app = require('./index')

test('expect the index to correctly crate a person', () => {
 const person = [{id: 1, name: 'Lauro', age:  15, gender: 'M', isActive: true}]
 expect(app.createPerson('Lauro', 15, 'M')).toEqual(person[0])
 app.persons.pop()
})

test('expect the function to deactivate a person', () => {
    app.persons.push({id: 1, name: 'Lauro', age:  15, gender: 'M', isActive: true})
    expect(app.deactivatePersonById(1)).toBe(false)
    app.persons.pop()
})

test('expect the function to only return active persons', () => {
    app.persons.push(
    { id: 1, name: 'Lauro', age: 15, gender: 'M', isActive: true}, 
    { id: 3, name: 'Bruno', age: 24, gender: 'M', isActive: false}, 
    { id: 2, name: 'Iza', age: 22, gender: 'F', isActive: true})
    for(i = 0; i < app.persons.length; i++){
        expect(app.getActivePersons()[i].isActive).not.toBe(false)
    }
})