import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
//import { Ticket } from '../../classes/ticket';
import { LoginService } from 'src/app/services/login.service';
import * as $ from "jquery";
import swal from 'sweetalert';
import { Train } from 'src/app/trains/classes/train';
import { TrainService } from 'src/app/trains/services/train.service';
//import * as Razorpay from 'razorpay';

declare var Razorpay: any;

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  trainId!: number;
  trainfare!: any;
  id!: any;
  train:Train=new Train();
  //ticket: Ticket=new Ticket();
 
ticket={
    
    passengerName:'',
    gender:'',
    email:'',
    phoneNo:'',
    age:'',
    requiredSeats:'',
    transactionId:'',
}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService:TicketService,
    private loginService:LoginService,
    private trainService:TrainService,
    private injector:Injector) { }

ngOnInit(): void {
  this.trainId = this.route.snapshot.params['id'];
  this.trainfare=this.route.snapshot.params['fare'];
  //console.log(this.trainfare)
  this.id=this.loginService.getId();
}

createTransactionAndbookTicket(){

    let seats:any=$("#requiredSeats").val();
    //console.log(seats);
      if(seats=='' || seats==null){
        alert('Please fill the required seats');
        return;
      }

      this.trainService.getsingleTrainById(this.trainId).subscribe(
        (Response:any)=>{
          this.train=Response;
          //console.log(this.train)
          if(this.train.availableSeats<=0){
            alert('No seats available see another train');
            return;
          }

      let finalfare=seats*this.trainfare;
     //console.log(finalfare);
     if(this.train.availableSeats<=0){
      alert('No seats available see another train');
    }
   
    else{
     this.ticketService.createTransaction(finalfare).subscribe(
      (response)=>{
        console.log(response);
        this.openTransactionalModel(response);
      },
      (error)=>{
        console.log(error);
      }
     );
    }
    },
    (error)=>{
      console.log(error);
    
  }
  )
    // $.ajax({
    //   url: 'http://localhost:8084/tickets/'+this.trainId+'/'+this.id,
    //   data:JSON.stringify({ticket:this.ticket,amount:finalfare}),
    //   contentType:'application/json',
    //   type:'POST',
    //   dataType:'json',
    //   success: function(response:any){
    //     console.log(response);
        
    //   },error: function(response){
    //     console.log(response);
    //     alert("something went wrong")
    //   }

    // })

  }


  openTransactionalModel(response:any){
   // if(response.status=='created'){
      let options={
          order_id:response.orderId,
          key:'rzp_test_Yce6a2ka2wxYZ2',
          amount:response.amount,
          currency:"INR",
          name:'Book your train ticket',
          description:'Book your ticket',
          image:'https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_1280.png',
          handler: (response:any)=>{
            if(response!=null && response.razorpay_payment_id != null){
              this.processResponse(response);
            }else{
              alert("payment failed")
            }
           
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);
            console.log("payment successful");
           // alert("payment successful");
            swal("Congrats!", "payment Successful!", "success" );
            
            },
            prefill: {
            name: "abcde",
            email: "abcde@gmail.com",
            contact: "12345"
            },
            notes: {
              address: "Razorpay Corporate Office"
              },
              theme: {
              color: "#3399cc"
              }
        }
       
        let rzp=new Razorpay(options);
        rzp.on('payment.failed', function (response:any){
         console.log(response.error.code);
         console.log(response.error.description);
         console.log(response.error.source);
         console.log(response.error.step);
         console.log(response.error.reason);
         console.log(response.error.metadata.order_id);
         console.log(response.error.metadata.payment_id);
         //alert("Oops Payment Failed!!")
         swal("Oops!", "Payment Failed!", "error" );
          });
        rzp.open()
    //}
  }


  processResponse(resp:any){
    //console.log(resp);
    this.ticket.transactionId=resp.razorpay_payment_id;
    this.BookTicket();
  }

  BookTicket(){
 this.ticketService.bookTicket(this.ticket,this.trainId,this.id).subscribe(
    (response:any)=>{
      console.log(response);
      this.goToTicketDetails();
    },
   error=>{
     console.log(error);
   }
  )

  }
  

  goToTicketDetails(){
      const ngZone= this.injector.get(NgZone);

      ngZone.run(() =>{
        this.router.navigate(['/my-bookings']);
      });
   
  }
}
