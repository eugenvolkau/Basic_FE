
//------ 1 -----------

// let menuobj = {
//     width: 200,
//     height: 300,
//     title: "my menu"
// };
// for (let key in menuobj){
//    if (typeof menuobj[key]=='number'){console.log(menuobj[key] = menuobj[key] * 2);}
//     else{console.log(menuobj[key]);} }
  
//---------- 2 ----------

// let arr = [
//     {
//     id: 1,
//     title: "bicycle",
//     price: 45000,
//     discount: 10
//     },
//     {
//     id: 2,
//     title: "roller-skates",
//     price: 15000,
//     discount: 5
//     },
//     {
//     id: 3,
//     title: "Kick scooter",
//     price: 10000,
//     discount: 30
//     },
//     {
//     id: 4,
//     title: "skis",
//     price: 25000,
//     discount: 20
//     },
//     {
//     id: 5,
//     title: "skate",
//     price: 10000,
//     discount: 0
// }
// ];
//------ 2.1 --------
// for (let i=0; i<arr.length; i++) {
// console.log(arr[i].title)}

// //-------2.2 ----------
// for (let i=0; i<arr.length; i++) {
//     console.log(`"<Title :  ${arr[i].title}> (<Price : ${arr[i].price}>)"`)}

// //-------- 2.3 ----------
// for (let i=0; i<arr.length; i++) {
//     console.log(`"<Title :  ${arr[i].title}> 
//     (<discounted Price : ${Math.round(arr[i].price*100/(arr[i].discount+100))}>)"`)}

//-------- 3 -----------
// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
//     }
//     let total = 0;
//     for (let key in obj) {        
//         for(let schlus in obj[key]){
//             total = total + obj[key][schlus];           
//         }
//     }
//     console.log(total);


    // second difficulty

    //------------------------------
    //--------   4 ,  5 ------------
    //------------------------------
//     let undergrad = [
//     {lN: 1,
//     1: 'Johann',
//     2: 'Bach',
//     3: 1750
// },
//     {lN: 2,
//     1: 'Wolfgang',
//     2: 'Mozart',
//     3: 1756
// },
//     {lN: 3,
//     1: 'John',
//     2: 'Lennon',
//     3: 1940
// },
//     {lN: 4,
//     1: 'Freddie',
//     2: 'Mercury',
//     3: 1946
// },
//     {lN: 5,
//     1: 'Charles',
//     2:  'Aznavour',
//     3: 1924
// },
//     {lN: 6,
//     1: 'Paul',
//     2: 'McCartney',
//     3: 1942
// },
//     {lN: 7,
//     1: 'Pyotr',
//     2: 'Tchaikovsky',
//     3: 1840
// },
// ]
// let gradebook = {
//     solfeggio: {1: 9, 2: 10, 3: 5, 4: 4, 5: 6, 6: 3, 7: 10},
//     composition: {1: 10, 2: 8, 3: 3, 4: 8, 5: 4, 6: 5, 7: 10},
//     conductingOrchestra: {1: 6, 2: 5, 3: 2, 4: 3, 5: 4, 6: 3, 7: 5},
//     marketing: {1: 2, 2: 1, 3: 7, 4: 8, 5: 8, 6: 5, 7: 2},
// }
// for (let i=0; i<undergrad.length; i++) {
//     let sum = 0;
//     console.log(`Dossier# : ${undergrad[i].lN}`);
//     console.log(`FirstName :${undergrad[i][1]} LastName : ${undergrad[i][2]}     Years : ${2024-undergrad[i][3]}`);
// for(let key in gradebook){
//     let grade = gradebook[key][undergrad[i].lN];
//     console.log(`${key} : ${grade}`);
//     sum = sum + gradebook[key][undergrad[i].lN];
// }
// console.log(`average rating : ${sum/4}`);
// }

//--------- 6 ---------
// let groceryStore = [
//     { 
//     title: 'black bread with bran',
//     price: 0.16,
//     quantity: 10
// },
//     {
//         title: 'vodka',
//     price: 3.62,
//     quantity: 2  
//     },
//     {
//         title: 'cigarettes "Kazbek"',
//     price: 0.25,
//     quantity: 22  
//     },
//     {
//         title: 'vegetable solyanka',
//     price: 0.37,
//     quantity: 2  
//     },
//     {
//         title: 'sprat in tomato sauce',
//     price: 0.95,
//     quantity: 2  
//     },
//     {
//         title: 'boiled sausage',
//     price: 2.20,
//     quantity: 3  
//     },
//     {
//         title: 'lollipops berberis',
//     price: 1.35,
//     quantity: 4
// }
// ]
// let limitPrice = prompt("what amount are you expecting?");
// let basket=[];
// for (let index = 0; index < groceryStore.length; index++) {
//     if(limitPrice>groceryStore[index].price) {
//         basket.push(groceryStore[index])
//     };
    
// }
// for (let index = 0; index < basket.length; index++) {
//    console.log(basket[index]);    
// }