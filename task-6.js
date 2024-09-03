/**
 * ---------Practice Task-----------
 * TICKET FARE CALCULATOR
 * CHILDREN (AGE < 10):FREE
 * STUDENTS GET A 50% DISCOUNT
 * SENIOR CITIZENS (AGE >= 60) GETS A 15% DISCOUNT
 * OTHERWISE REGULAR TICKET FARE 800 TK
 */

let age = 22;
let isStudent = true;
let ticketFare;

if(age < 10){
    ticketFare = 0;
}else if(isStudent){
    ticketFare = 800 * 0.5;
}else if(age >= 60){
    ticketFare = 800 * 0.85;
}
else{
    ticketFare = 800;
}
console.log('Ticket Fare:', ticketFare, 'Tk');

















// let age = 60;
// let isStudent = false;
// let ticketFare;

// if(age < 10){
//     ticketFare = 0;
// }else if(isStudent){
//     ticketFare = 800 * 0.5;
// }else if(age >= 60){
//     ticketFare = 800 * 0.85;
// }else{
//     ticketFare = 800;
// }
// console.log('Ticket Fare:', ticketFare, 'Tk');
