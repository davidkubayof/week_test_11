import { Flight } from "./flight.js"

export class Airport {
    constructor(){
        this.flights = []
        this.addFlights()
    }
    addFlights(){    
        const flight1 = new Flight("tlv","al al",100 ,10 , 50 , 150)
        const flight2 = new Flight("nyc","jll",200 ,20 , 50 , 150)
        const flight3 = new Flight("arm","ar ama ",30 ,30 , 50 , 150)

        this.flights.push(flight1)
        this.flights.push(flight2)
        this.flights.push(flight3)
    }
}
