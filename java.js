
// // // massiv cesidlenmesi tap 
// // // let names = ['Hofstadter', 'Cooper', 'Wolowitz', 'Koothrappali'];
// // // names.sort((a,b) => {
// // //     return b.localeCompare(a)
// // // } )
// // // console.log(names) 

// // // let about = {
// // //     name:'Gunay',
// // //     surname:'Abbasli',
// // //     gender:'women',
// // //     birthday: "01.04.2003"
// // // }
// // // about.age = 20;
// // // delete about.birthday;
// // // console.log(about)  

// // // let arr = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// // // let a = 0
// // // for (let i = 0; i < arr.length-1; i++){
// // //     for(let i = 0; i<arr.length; i++){
// // //         if(arr[i] > arr[i + 1]){
// // // a = arr[i]
// // // arr[i] = arr[i + 1]
// // // arr[i + 1 ] = a
// // //         }
// // //     }
// // // }
// // // console.log(arr)

// // // let a = 10
// // // let b = 20
// // // let c = a 
// // // a = b
// // // b = c
// // // console.log(c, b, a) 

// // // let text = "salam men Amil"
// // // let a = 0
// // // for(let i = 0; i < text.length; i++){
// // //     if(text[i] === "a" || text[i] === "A"){
// // //         a++
// // //     }
// // // }
// // // console.log(a) 

// // // let text = "sala1 4men2 Amil3"
// // // let a = 0
// // // for(let i = 0; i < text.length; i++){
// // //     if(text[i] > 0 && text[i] < 9){
// // //         a++
// // //     }
// // // }
// // // console.log(a) 

// // // let text = "5salam4 Hello2"
// // // let a = 0
// // // for(let i = 0; i < text.length; i++){
// // //     if(text[i] > 0 && text[i] < 9){
// // //         a += +text[i]
// // //     }
// // // }
// // // console.log(a) 

// // // let users = [
// // // {
// // // name:"Fuad",
// // // age: 22,
// // // },

// // // {
// // //     name:"Fidan",
// // //     age: 14,
// // // },

// // // {
// // //     name:"Nail",
// // //     age: 5,
// // // },

// // // {
// // //     name:'Eyvaz',
// // //     age: 12,
// // // },

// // // {
// // //     name:"Emin",
// // //     age: 3
// // // }
// // // ]
// // // let age = []
// // // const result = users.filter((e) => {
// // //     return e.age > 10
// // // })
// // // console.log(result) 


// // // let stockItem = {
// // //     id: 7,
// // //     place: 'cupboard',
// // //     weight: 100
// // // }

// // // shopItem = Object.create(stockItem)
// // // shopItem.price = 500
// // // shopItem.place = undefined
// // // console.log(shopItem)



// // let name = ['Nicola Tesla, 1856', 'Alan Turing, 1912', 'Ada Lovelace, 1815'];
// //  function sortByBirth(date){
// //     for (let i = 0; i < date.length; i++) {
// //         for (let i = 0; i < date.length - 1; i++) {
// //             if (+(date[i].split(', ')[1]) > +(date[i + 1].split(', ')[1])) {
// //                  datee = date[i];
// //                 date[i] = date[i + 1];
// //                 date[i + 1] = datee;
// //             }
// //         }
// //     }
// //     return date;
// // }
// // console.log(sortByBirth(name));




// // class Person {

// //     constructor(n, sn, age, gn){
// //         this.name = n;
// //         this.surname = sn;
// //         this.age= age;
// //         this.gender = 'women';

// //     }

// // celebrateBirthday(age){
// //     this.age += 1
// // }

// // }

// // let user1 = new Person('gunay',  20, )
// // user1.celebrateBirthday(this.age)

// // class Person {

// // constructor(n, a){
// //     this.name = n;
// //     this.age = a;
// // }


// // celebrateBirthday(){
// //     return this.age += 1
// // }

// // }

// // let user1 = new Person('gunay', 20)
// // console.log(user1.celebrateBirthday())

// SLAYDDD

// // class Person{
// //     constructor(sn, n, age, gen){
// //         this.surname = sn;
// //         this.name = n;
// //         this.age = age;
// //         this.gender = gen;
// //     }
// // }

// // class Admin extends Person{
// //     constructor(sn, n, age, gen,role, id){
// //         super(sn, n, age, gen);
// //         this.role = role
// //         this.id = id
// //     }
// // }

// // class Player extends Person{
// //     constructor(sn, n, age, gen, ll){
// //         super(sn, n, age, gen);
// //         this.level = ll;
// //     }
// // }

// // let person1 = new Person('Abbasli', 'Gunay', 20, 'Female');
// // let admin1 = new Admin('Abbasli', 'Gunay', 20, 'Female', "hfbrefb", 'dcds')
// // let player1 = new Player('Abbasli', 'Gunay', 20, 'Female', 1)
// // console.log(person1)
// // console.log(admin1)
// // console.log(player1) 


// KOMISSIYA

// // class Transaction {
// // constructor(fromcl, tocl, amount,){
// //     this.fromClient = fromcl;
// //     this.toClient = tocl;
// //     this.amount = amount;
// //     this.commission = 0.05;

// // }

// // calculateCommission(){
// //     return this.amount * this.commission
// // }

// // }

// // const transaction = new Transaction('Christian', 'Daniel', 1000);
// //             console.log(transaction.calculateCommission());


// CALCULATOR

// class SimpleCalc{
//     constructor(ilk){
// this.number = ilk
//     }

// plus(number){
//     this.number += number
//     return this
// }

// mult(number){
//     this.number *= number
//     return this
// }
// divide(number){
//     this.number /= number
//     return this
// }

// minus(number){
//     this.number -= number
//     return this
// }

// toString(){
//     return this.number.toString()
// }

// }

// // const simpleCalc = new SimpleCalc(8)
// // simpleCalc.mult(10);
// // simpleCalc.plus(2);
// // simpleCalc.minus(7);
// // simpleCalc.divide(5);
// // console.log(simpleCalc.toString())



// class ProgrammerCalc extends SimpleCalc {
//     constructor(ilk){
//         super(ilk)
//     }

//     toString(){
//         return this.number.toString(2)
//     }
// }

// const programmerCalc = new ProgrammerCalc(8)
// programmerCalc.mult(10);
// programmerCalc.plus(2);
// programmerCalc.minus(7);
// programmerCalc.divide(5);
// console.log(programmerCalc.toString())





// let h1 = document.querySelector("li")
// console.log(h1)

// let a = document.createElement('p')
// console.log(a)



// let h1 = document.querySelector('h1')
// h1.remove();
// let ul = document.querySelector('ul')
// ul.append('tutan rtx')

// let form = document.querySelector("form")

// form.addEventListener("submit", (e) =>{
//     e.preventDefault()
// const data = new FormData(e.target)
// let p = data.get("pasw")

// if(p.length >= 5){
//     console.log("icaze ver")
// }else{
//     console.log("giris qadagan")
// }

// }


// )


// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
// let obj = JSON.parse(data)
// console.log(typeof obj)
// obj.id = 157
// console.log(obj)
// let objj = JSON.stringify(obj)
// console.log( objj)


// const character1 = '{"agility": 15, "intelligence": 15, "strength": 150, "magicPower": 5500, "magicResist": 2000, "armor": true}';
// const character2 = '{"agility": 20, "intelligence": 10, "strength": 150, "magicPower": 5000, "magicResist": 2500, "armor": true}';
// let a = JSON.parse(character1);
// let b = JSON.parse(character2);
// a.agility +=20;
// b.agility+=20;
// a.intelligence +=20;
// b.intelligence +=20;
// let c = JSON.stringify(a)
// let d = JSON.stringify(b)
// console.log(c, d)

// let a = prompt("tarix daxil edin - YYYY.MM.DD");
// let b = document.getElementsByClassName("blabla")
// fetch(`https://isdayoff.ru/${a}`)
// .then(res => res.json())
// .then((data) =>{
//     console.log(data)
//     if(data === 0){
//         b.innerHtml = ( "is gunudur")
//     }else if(data === 1){
//         b.innerHtml = ( "hefte sonu")
//     }else if(data === 100){
// b.innerHtml = ("tarix sehvdir")
//     }else if(data === 101){
//       b.innerHtml = ("melumat tapilmadi")
//     }
// }
// )
// .catch((error) =>{
//     console.log(error)
// }
// )



