interface student{
    name: string;
    age: number;
}
const newStudent:student={
    name:"abi",
    age:33
}
console.log(newStudent);


 interface specialstudent extends student{
      location:string;
 }
 const superstudent:specialstudent={
    name: "abi",
    age: 33,
    location: "madurai"

 }
 console.log(superstudent);
 


//online train ticket booking


 // Define the TrainTicket interface
interface TrainTicket {
    ticketId: number;
    passengerName: string;
    origin: string;
    destination: string;
}

// Create the Ticket class implementing the TrainTicket interface
class Ticket implements TrainTicket {
    constructor(
        public ticketId: number,
        public passengerName: string,
        public origin: string,
        public destination: string
    ) {}

    displayInfo() {
        console.log(`Ticket ID: ${this.ticketId}, 
            Passenger: ${this.passengerName}, 
            From: ${this.origin}, 
            To: ${this.destination}`);
    }
}

// Create the BookingSystem class to manage bookings
class BookingSystem {
    private tickets: Ticket[] = [];

    bookTicket(ticket: Ticket) {
        this.tickets.push(ticket);
        console.log(`Ticket booked for ${ticket.passengerName}.`);
    }

    showAllTickets() {
        if (this.tickets.length === 0) {
            console.log('No tickets booked.');
            return;
        }
        this.tickets.forEach(ticket => ticket.displayInfo());
    }
}

// Using the BookingSystem
const bookingSystem = new BookingSystem();

// Create and book tickets
const ticket1 = new Ticket(1, 'Abi', 'ettayapuram', 'theni');
const ticket2 = new Ticket(2, 'nithu', 'madurai', 'chennai');

bookingSystem.bookTicket(ticket1);
bookingSystem.bookTicket(ticket2);
bookingSystem.showAllTickets();
