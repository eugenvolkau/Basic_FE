//---- 1 -----

// let d = 7;
// console.log(d**2);
// console.log(d**3);

//-------- 2 ---------

// let a = Number(prompt('Enter  num1'));
// let b = Number(prompt('Enter  num2'));
// if(a>b){
//     console.log(a+b);
// }else {if(a<b){
//     console.log(a*b);
// }else {if(a=b) {
//     console.log('they are equal');
// }}}

//-------- 3 -----------

// let c = Number(prompt('Enter num3 '));
// if(0<=c){
//     console.log(c**3);
// }else {console.log('remove the minus');}

//----------- 4 -----------

// let pupils = Number(prompt('number of pupils'));
// let chairs = Number(prompt('number of chairs'));
// if(pupils<chairs){
//     console.log(`There are more chairs than pupils. ${chairs-pupils} can be sold`);
// } else if(pupils>chairs){console.log(`${pupils-chairs} chairs need to be purchased.`);}
// else if(pupils==chairs){console.log(`complete idyll`);}


//---------- 5 ------------

// let numPositiv = 0;
// for (let index = 0; index < 10; index++) {
//    console.log(numPositiv++);    
// }

//--------- 6 --------------

// let arrRand = [];
// for (let index = 0; index < 20; index++) {
//     arrRand[index] = Math.floor(Math.random() * Math.floor(30));
//     if(15<=arrRand[index]){
//     console.log(arrRand[index]);}
// }

//-------- 7 & 9 & 10-------------

// let arrRand = [];
// let summOdd = 0;
// let summEven = 0;
// for (let index = 0; index < 10; index++) {
//     arrRand[index] = Math.floor(Math.random() * Math.floor(20));
//     if((arrRand[index]%2)!=0){
//     console.log(arrRand[index]);
//     summOdd = summOdd + arrRand[index];}else{summEven=summEven+arrRand[index]}}
// console.log(`sum of odd numbers :  ${summOdd}`);
// console.log(`sum of even numbers  : ${summEven}`);
// if((summEven-summOdd)<0){console.log(`the sum of even numbers is less than 
// the sum of odd numbers by ${Math.abs(summEven-summOdd)}`);}
// else {console.log(`the sum of odd numbers is less than the 
// sum of even numbers by ${summEven-summOdd}`)}

//----------- 8 ------------

// let arrRand = [];
// for (let index = 0; index < 20; index++) {
//     arrRand[index] = Math.floor(Math.random() * Math.floor(30));
//     if((index%3)==0){
//     console.log(`Index ${index}   value==> ${arrRand[index]}`);}
// }



// let arrReduct=[20, 30, 40,];
// arrReduct.pop();
// console.log(arrReduct);
// arrReduct.shift();
// console.log(arrReduct);
// arrReduct.unshift(40, 20, 60);
// let num1='num1';
// let num2='num2';
// let num3='num3';
// console.log(arrReduct);
// arrReduct.push(num1,num2,num3);
// console.log(arrReduct);
// let pos=arrReduct.indexOf(60);
// let remove=arrReduct.splice(4,2,1,2,3,4,5);
// console.log(arrReduct);




