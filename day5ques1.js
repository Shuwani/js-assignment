var a= [];
var size = Number(prompt("Enter size"));
for(var i=0; i<size; i++) {
    a[i] = Number(prompt('Enter Element'));
}
console.log("Rlements are:"+a);

var odd=a.filter(el=> el%2!=0);
  console. log("Odd from array is:"+odd);
  
var cube=odd.map(el=>el**3);
console. log("Cube is:"+cube);
  
  