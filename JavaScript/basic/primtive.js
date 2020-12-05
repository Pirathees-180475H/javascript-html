let name="pts";
let age='1';   // both are  string

let ismale=true;
let isfemale=false;

let a;
console.log(a); // result is undifined

let b=null; // result is null


// non premtive  array, object


let arrayA=[];
arrayA=['pts',5,"abcd"];

console.log(arrayA);

// array access arrayA[2];
 console.log(arrayA[2]);

 let num=[];
 num=[5,4,8,1,3,6];

 console.log(num.sort());

 // push ,pop

 num.push(60); // push on lasta
 console.log(num);

 num.pop(1); // pop on last
 console.log(num);



                                                            // object


 let pen={
       type:"pen10", cost:15 , // attributes  , is importent
       owner:["a","b"]


 };
// access------>   pen.property
console.log(pen.cost);

console.log(pen.owner[1]);


                                                       // functions

function hello()
{
    console.log('hello from function');
}

hello();

function multi(a,b){
    console.log(a*b);
}

multi(3,6);

                                        // ifcondition    and && , or ||

let x=4;
if(x<4){
    console.log('lower than 4')
}else if(x=4 || x<5){console.log("equal to 4")}

else{ console.log("higher than 4") }


                                   // loop
let y=10;
while(y>5){
    console.log(y);
    y=y-1;
}

   //do while

let z=9;

do{       // 1 step run compulsary
    console.log(z);
}while(z>10);


for(i=0;i<5;i++){
    console.log(i);
}


let mark=3;

switch(mark){  // case's are excepted values
    case 1: console.log("mark is 1"); break;

    case 3: console.log('it 3'); break;

    default: break;
}


