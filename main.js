class Person {
  
  constructor(
    firstName = 'John',
    lastName = 'Doe',
    age = 0,
    gender = 'Male'
    ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }

}

let bob = new Person('bob', 'the builder', 44, 'Male')

bob.sayFullName()

bob.greetExtraTerrestrials('Annaresti')


// constructor params: firstName, lastName, age, gender    // str, str, num, str
// sayFullName method return: full name     // str
// greetETs params: raceName     // str
// greetETs return: 'Welcome to Planet Earth raceName'     // str

// e.g. let bob = new Person('bob', 'the builder', 44, male)
// bob.sayFullName()
// results in 'bob the builder'
// greetExtraTerrestrials('Annaresti')
// results in 'Welcome to Planet Earth Annaresti'

// make a constructor with params firstName, lastName, age, gender
// add a method which returns firstName lastName
// add a static method which takes in the param raceName and returns the string 'Welcome to Planet Earth raceName'
