// let cars = [ 20000,16000,40000,30000,35000,60000,13000,15000,45000,110000]

// let from = prompt("from")
// let up = prompt("up")

// let filtered = cars.filter( i => i >= from && i <= up )

// console.log(filtered);






// let cars = [18000,15000,22000,33000,5000,30000,40000,37000,60000,40000]


// let total = 0

// cars.forEach(price => total += price)
// console.log(total);


// Sum

// let total = 0
// total = cars.reduce((a, b) => {
//     return a + b
// })
// console.log(total);



// the highest or the lowest

// total = cars.reduce((a, b) => {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// })

// console.log(total);












// let students = [
//     {
//         name: "Javokhir",
//         age: 15,
//         status: 'single',
//         gender_is_male: true

//     },
//     {
//         name: "Munir",
//         age: 16,
//         status: 'single',
//         gender_is_male: false
        
//     },
//     {
//         name: "Jago",
//         age: 14,
//         status: 'married',
//         gender_is_male: true
        
//     },
//     {
//         name: "Jahonbek",
//         age: 14,
//         status: 'married',
//         gender_is_male: false
        
//     }
// ]


// students.forEach(user => {
//     console.log(user.name, user.status, user.gender_is_male);
// })






// let married = 0

// students.forEach(user => {
//     if (user.gender_is_male === true) {
//         married += 1
//     }
// })

// console.log(married);





// let write_nick = prompt("who do u want?").toLowerCase().trim()

// students.find(user => {
//     if(user.name.toLowerCase().trim() === write_nick) {
//         console.log(user);
//     }
// })







// let market = [
//     {
//         name: 'moloko',
//         price: 13000,
//         type: 'dairy'
//     },
//     {
//         name: 'potato',
//         price: 4000,
//         type: 'vegetables'
//     },
//     {
//         name: 'vodka',
//         price: 25000,
//         type: 'alcohol'
//     },
//     {
//         name: 'tvorog',
//         price: 8000,
//         type: 'dairy'
//     },
//     {
//         name: 'tomato',
//         price: 20000,
//         type: 'vegetables'
//     },
//     {
//         name: 'vine',
//         price: 50000,
//         type: 'alcohol'
//     },
//     {
//         name: 'beer',
//         price: 20000,
//         type: 'alcohol'
//     },
//     {
//         name: 'carrot',
//         price: 4000,
//         type: 'vegetables'
//     },
// ]


// let dairy = {
//     count: 0,
//     total_price: 0
// }
// let vegetables = {
//     count: 0,
//     total_price: 0
// }
// let alcohol = {
//     count: 0,
//     total_price: 0
// }


// market.forEach(products => {
//     if(products.type === 'dairy'){
//         dairy.count++
//         dairy.total_price += products.price
//     } else if (products.type === 'alcohol'){
//         alcohol.count++
//         alcohol.total_price += products.price
//     } else {
//         vegetables.count++
//         vegetables.total_price += products.price
//     }
// });

// console.log(dairy);
// console.log(alcohol);
// console.log(vegetables);





// market.forEach(product => {

//     switch (product.type) 
//     {
//         case 'dairy':
//             dairy.count++
//             dairy.total_price += product.price
//             break;

//             case 'alcohol':
//                 alcohol.count++
//                 alcohol.total_price += product.price
//                 break;

//                 case 'vegetables':
//                     vegetables.count++
//                     vegetables.total_price += product.price
//                     break;
//     }
// });

// console.log(dairy);
// console.log(alcohol);
// console.log(vegetables);









