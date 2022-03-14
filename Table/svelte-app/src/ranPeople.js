import { faker } from '@faker-js/faker';


let peopleList = []

faker.setLocale("sv")

function randomPerson() {

    const gender = faker.name.gender();

    const person = {
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(),
        age: Math.floor(Math.random() * 100), 
        gender: gender,
        avatar: faker.image.avatar(),
        job: faker.name.jobArea()
    }

    peopleList.push(person);
}

for ( let index = 0; index < 30; index++ ) {
    randomPerson()
}

export default{ peopleList }