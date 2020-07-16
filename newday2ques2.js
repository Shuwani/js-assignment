console. log("******STRING********");
var str="Johnson is a boy";
console. log(str);
console. log(str.length);
console. log(str.toLowerCase());
console. log(str.toUpperCase());
console. log(str[3]);
console. log(str.indexOf('o'));
console. log(str.lastIndexOf('o'));
console. log(str.charAt(8));
console. log(str.endsWith("boy"));
console. log(str.split(''));
console. log(str.split('o'));
console. log(str.substring(2,5));
console. log(str.replace("o","c"));
//console. log(str.replaceAll("o","c"));
console. log("  ");

console. log("**********ARRAY*********");
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
console. log(Array.isArray(arr1));
console. log(arr1.reverse());
console. log(arr1[3]);
console. log(arr1.concat(arr2));
arr2.unshift(100);
console. log(arr2);
arr2. shift(100)
console. log(arr2);
arr1. push(200)
console. log(arr1);
arr1. pop()
console. log(arr1);
arr1. splice(1,2,500)
console. log(arr1);