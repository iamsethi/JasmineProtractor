function simpleFunc(){

    console.log("Inside Function");

}

simpleFunc();

function add(a,b){

 //   var sum = a+b;
  //  console.log(sum);

  return(a+b);

}

console.log(add(10,20));


function course(){


    this.topic = "Protractor";
    this.duration = "20 hours";

}


var obj_course = new course();
console.log(obj_course.topic+"----"+obj_course.duration);


function student(name, rollNo){


    this.name = name;
    this.rollNo = rollNo;

}


var obj_student = new student("Rahul",101);
console.log("Student name is : "+obj_student.name+" and roll number is: "+obj_student.rollNo);


