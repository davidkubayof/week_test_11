import { nanoid } from 'nanoid'

export class StudentPassenger  {
    constructor(name , amountOfMoney , schoolNameOrUniversity){
        this.name = name
        this.id = nanoid(36)
        this.amountOfMoney = amountOfMoney 
        this.schoolNameOrUniversity = schoolNameOrUniversity
    }
    buyTicket(flight){
        if(this.amountOfMoney < flight.regularTicketPrice * 0.1){
            return false
        }
    }
}
