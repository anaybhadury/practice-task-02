/**
 * ---------Practice Task-----------
 * IF YOU GET MORE THEN 80 THEN INSIDE YOUR FRIEND SCORE.
 * IF YOUR FRIEND GET MORE THEN 80, THEN GO FOR A LUNCH.
 * IF YOUR FRIEND GET BELOW 80 BUT GRATER THEN OR EQUAL 60 THEN TELL YOUR FRIEND, GOOD LUCK NEXT TIME.
 * IF YOUR FRIEND GET LESS THEN 60 BUT MORE THEN OR EQUAL TO 40 THEN, KEEP YOUR FRIEND'S MESSAGE UNSEEN.
 * IF YOUR FRIEND GET LESS THEN 40, BLOCK YOUR FRIEND.
 * IF YOU GET LESS THEN 80 GO TO HOME AND SLEEP AND ACT SAD
 */

let myScore = 85;
let firendScore = 0;

if(myScore > 80){
    if(firendScore > 80){
        console.log('cholo lunche korte jay');
    }
    else if(firendScore <= 80 && firendScore >= 60){
        console.log('good luck for next time');
    }
    else if(firendScore < 60 && firendScore >= 40){
        console.log('friend message unseen');
    }
    else if(firendScore < 40){
        console.log('block my friend');
    }
}
else{
    console.log('go to home and sleep and act sad');
}




