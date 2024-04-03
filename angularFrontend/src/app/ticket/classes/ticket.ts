import { Train } from "src/app/trains/classes/train";


export class Ticket {
    id!:number;
    ticketId!:number;
    trainId!:number;
    passengerName!:string;
    gender!:string;
    email!:string;
    phoneNo!:string;
    requiredSeats!:number;
    age!:number;
    bookedOn!:Date;
    transactionId!:string;
}
