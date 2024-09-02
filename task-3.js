/**
 * ---------Practice Task-----------
 * GRADE CALCULATOR
 * CREATE A SIMPLE JAVASCRIPT PROGRAM THAT TAKES A STUDENT'S SCORE AS INPUT AND RETURNS THEIR CORRESPONDING GRADE BASED ON THE FOLLOWING GRADING SCALE.
 * A: 90-100
 * B: 80-89
 * C: 70-79
 * D: 60-69
 * F: 0-59
 */

const obtanMark = 99;
if(obtanMark <= 100 && obtanMark >= 90){
    console.log(obtanMark + ' A');
}
else if(obtanMark <= 89 && obtanMark >= 80){
    console.log(obtanMark + ' B');
}
else if(obtanMark <= 79 && obtanMark >= 70){
    console.log(obtanMark + ' C');
}
else if(obtanMark <= 69 && obtanMark >= 60){
    console.log(obtanMark + ' D');
}
else{
    console.log(obtanMark + ' tumi feeeeeeeeel')
}

