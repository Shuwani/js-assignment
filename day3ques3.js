console. log("***Conditional Statement***")
let marks=Number(prompt("Enter marks"));
console.log(marks, typeof(marks));
if(marks>=90){
console. log(" Grade is A");
}
 else if(marks>=80 && marks<90){
console. log(" Grade is B");
}
else if (marks>=70 && marks<80){
console. log(" Grade is C");
}
else if(marks>=60 && marks<70){
console. log(" Grade is D");
}
else if (marks>=50 && marks<60){
console. log(" Grade is E");
}
else{
console. log("Fail");
}

console. log(" ")
console. log("****Switch****");
 mark=parseInt(marks/10);
console. log(mark);
switch(mark){
    case 9:
    console. log(" Grade is A");
    break;
      case 8:
     console. log(" Grade is B");
     break;
     case 7:
       console. log(" Grade is C");
       break;
       case 6:
       console. log(" Grade is D");
       break;
       case 5:
       console. log(" Grade is E");
       break;
       case 4:
       case 3:
       case 2:
        case 1:
        case 0:
          console. log("Fail")
        break;
       default:
       console. log(" Invalid no");     
}
console. log(" ")
console. log("**Ternary Operator**");
marks=(marks>=90)? console. log("Grade is A"):
      (marks>=80 && marks<90)? console. log("Grade is B"):
      (marks>=70  && marks<80)? console. log("Grade is C"):
      (marks>=60  && marks<70)? console. log("Grade is D"):
      (marks>=50  && marks<60)? console. log("Grade is E"):
      console. log("Fail");