import { nanoid } from 'nanoid'

export class RegularPassenger {
    constructor(name , amountOfMoney , workPlace , airportEmployee ){
        this.name = name
        this.id = nanoid(36)
        this.amountOfMoney = amountOfMoney 
        this.workPlace = workPlace 
        this.airportEmployee = airportEmployee //
    }
    buyTicket(flight){
        if(this.amountOfMoney < flight.regularTicketPrice){
            return false
        }
    }
}
