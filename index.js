function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height= height/100;
  let BMI = weight/(height*height);
  alert (BMI)
 if (BMI<18.5){
    alert ("Under weight")
 }
 if (BMI<24.9 && BMI>18.5){
  alert ("Healthy weight")
 }
 if (BMI<29.9 && BMI>25.0){
  alert ("Over weight")
 }
 if (BMI>30.0){
  alert ("Obese")
 }

}
