const person = {
  name: 'Artyom',
  surname: 'Poeta',
  age: 30
}

function user(person) {
  for(let key in person) {
    if(person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`)
    }
  }
}
 
user(person)