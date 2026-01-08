import { RegularTicket } from "./ticket.js"
import { TicketVIP } from "./VIPticket.js"

export class Flight {
    constructor(flightName , airline , flightNumber , maximumNumberOfPassengers , regularTicketPrice , ticketPriceVIP){
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber 
        this.maximumNumberOfPassengers = maximumNumberOfPassengers
        this.regularTicketPrice = regularTicketPrice 
        this.ticketPriceVIP = ticketPriceVIP
        this.ticketsList = []
        this.addTickets()
    }
     addTickets(){
        const  vip = new TicketVIP(this.ticketPriceVIP , null )
        const  regular = new RegularTicket(this.regularTicketPrice , null)
        
        const numTvip = this.maximumNumberOfPassengers * 0.1
        
        for(let i=0; i<numTvip;i++){
            this.ticketsList.push(vip)
        }
        const numTreg = this.maximumNumberOfPassengers * 0.9
        for(let i=0; i<numTreg;i++){
            this.ticketsList.push(regular)
        }
    }
} 