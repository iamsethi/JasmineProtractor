function Calculator(){


    this.num1 = 10;
    this.num2 = 20;

    this.print = function(){

        console.log(this.num1+this.num2);
    }

    this.add = function(a,b){

        console.log(a+b);
    }


    this.sub = function(a,b){

        return a-b;
    }




}

module.exports = Calculator;
