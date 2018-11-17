/*

Break --> Switch / Loops - will tranfer the execution outside the loop
Continute --> Loops - it transfers the execution to the next iteration

*/

/*
for(var i=1; i<=10; i++){


    if(i==5){

        continue;        
    }
    console.log(i);
}*/


loop1:for(var i=1; i<=3;i++){

    loop2:for(var j=1; j<=3; j++){

        if(j==2){

            break loop1;
        }
        console.log("i -->"+i+"  j--->"+j);

    }
}