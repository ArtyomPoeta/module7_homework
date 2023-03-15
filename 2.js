const person = {
  name: 'Artyom',
  surname: 'Poeta',
  age: 30
}

function verify(str, obj) {
    console.log(str in obj)
}

verify('name', person)