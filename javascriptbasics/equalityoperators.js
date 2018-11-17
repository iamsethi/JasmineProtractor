/*
= assignemnt operator
== compares the value
!=
=== compares the equality in both types
*/


var i=10;
var j=20;

console.log(i!=j);

var s1 = "Rahul"; //String value
var s2 = "Arora";

console.log(s1==s2); //compares value


var s3 = new String("Rahul"); //Object
var s4 = new String("Rahul");

console.log(s1===s3); //checks type
console.log(s3===s4);

var name1 = "Rahul";
var name2 = "Raman";

name1=name2;
console.log(name1);
console.log(name2);