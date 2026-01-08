import { Airport } from "./classes/airport.js";
const airport = new Airport()
console.log(airport.flights);

import { StudentPassenger } from "./classes/studentPassenger.js";
const  student1 = new StudentPassenger("david", 100, "OXFORD")
student1.buyTicket(airport.flights[0])
console.log(student1);

import { RegularPassenger } from "./classes/regularPassenger.js";
const  regular1 = new RegularPassenger("david", 100, "jwt" ,true)
console.log(regular1);



 