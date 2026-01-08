import { nanoid } from 'nanoid'

export class RegularTicket {
    constructor(price , ownerName){
        this.randomTicketNumber = nanoid()
        this.price = price
        this.ownerName = ownerName 
    }
}
