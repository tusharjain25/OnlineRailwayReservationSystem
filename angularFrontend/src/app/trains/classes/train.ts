import { Time } from "@angular/common";

export class Train {
    trainId!:number ;
    trainNumber!:number;
    trainName!:string ;
    source!:string ;
    destination!:string ;
    fare!:number ;
    departureTime!:Time;
    arrivalTime!:Time;
    availableSeats!:number;
}
