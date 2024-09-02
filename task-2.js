/**
 * ---------Practice Task-----------
 * BMI CALCULATOR AND HEALTH CATEGORY
 * CREATE A JAVASCRIPT PROGRAM THAT CALCULATES THE BODY MASS INDEX (BMI) AND ASSIGNS A HEALTH CATEGORY BASED ON THE BMI VALUE. USE NESTED IF-ELSE STATEMENTS TO DETERMINE THE HEALTH CATEGORY.
 * CALCULATE BMI USING THE FORMULA: BMI = WEIGHT(KG) / (HEIGHT (M))*2
 * BMI < 18.5, YOU ARE UNDERWEIGHT.
 * BMI >= 18.5 AND BMI <= 24.9, YOU ARE NORMAL.
 * BMI >= 25 AND BMI <= 29.9, YOU ARE OVERWEIGHT.
 * OTHERWISE, YOU ARE OBESE.
 */

const weight = 62;
const height = 1.70;
const bmiCalculator = (weight / (height * height));
// console.log('bmi' + bmiCalculator);

if(bmiCalculator < 18.5){
    console.log('you are underweihgt')
}
else if(bmiCalculator >= 18.5 && bmiCalculator <= 24.9){
    console.log('you are normal')
}
else if(bmiCalculator >= 25 && bmiCalculator <= 29.9){
    console.log('you are overweight')
}
else{
    console.log('you are obese')
}
