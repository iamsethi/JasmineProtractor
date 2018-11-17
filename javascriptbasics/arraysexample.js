//var courses = ["Selenium","Protractor","Appium","Jmeter"]
/*
var courses = new Array("Selenium","Protractor","Appium","Jmeter");
console.log(courses[1]);
console.log(courses.length); */

var courses = new Array(4);

courses[0] = "Selenium";
courses[1] = "Protractor";
courses[2] = "Appium";
courses[3] = "JMeter";

//console.log(courses);
/*
for(var i=0; i<courses.length; i++){

    console.log(courses[i]);
}*/

for(var course in courses){


    console.log(courses[course]);
}


