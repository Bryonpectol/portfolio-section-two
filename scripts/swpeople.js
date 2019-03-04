import { people } from '../data/people.js'


const men = people.filter(person => person.gender === 'male');

console.log(men);