const person = {
  firstName: 'Gaby',
  lastName: 'Rios',
  age: 55,
  address: {
    city: 'Aventura',
    state: 'Florida',
    zip: '33180',
  },
  pets: ['🐶', '🐷', '🐰'],
}

person.family = ['Gianna', 'Lucas', 'Nana', 'Papa']
console.log(person)



//const myState = person.address.state
//const myZipcode = person.address.zip
//const myage = person.age

const { address, age, firstName, lastName } = person

//console.log(`my city ${address.city}, my zipcode ${address.zip}, and my age is ${age}`)

function getBirthYear(myAge) {
}
    const myYear = getBirthYear(age)
    

    //console.log(birthYear)

    const allKeys = Object.keys(person)
    console.log('this is all the values', allKeys[0])
    console.log('this is all the values', ${person['firstName']})
    



