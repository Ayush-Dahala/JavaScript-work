// localStorage.setItem("NAME","AYUSH")
// localStorage.setItem("1","VICKEY")
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// console.log(localStorage.getItem("NAME"));
// localStorage.removeItem("Name2")
// localStorage.clear()
// let arr=[2,3,45,"ayush"]
// localStorage.setItem("arr",JSON.stringify(arr))
// let r=JSON.parse((localStorage.getItem("arr")))
// r.forEach(function(element,index,array){
//     console.log(element,index,array)
// });
// sessionStorage.setItem("name","rohan")
// sessionStorage.setItem('name1','ayush')

// let doc1=document.getElementsByClassName("this"); //Create div

// let div=document.createElement("li");
// let text=document.createTextNode("hello");
// div.className='childul1';
// div.appendChild(text);
// doc1[0].append(div)
// let element=document.getElementsByClassName("childul1")
// element[0].addEventListener("click",myfunc)
// function myfunc(){
//     let text=document.createElement("input")
//     text.id='editText'
//     text.type='text'
//     text.innerText=''
//     element[0].replaceWith(text)
//     let updateText=document.getElementById('editText')
//     updateText.addEventListener('blur',myfunc1)

//     function myfunc1(){
//         updateText=updateText.value
//         localStorage.setItem("edited Text",updateText)
//     }
// }

//Object literals
// let student={
//     class:'8th',
//     school:"Ahlcon Public School"
// }
// console.log(student)
// console.log(student)

//constructor
// function student(Name,Class,marks) {
//     this.name=Name;
//     this.class=Class;
//     this.marks=marks;
//     this.detail=function(){
//         console.log(`Name of student is ${this.name} and his class is ${this.class} and he gain ${this.marks} marks`);
//     }
// }

// student.prototype.setName=function() {
//     return this.name
// }

// student.prototype.getClass=function() {
//     return this.class
// }

// stu2=new student("Rohan","9th",85)
// console.log(stu2.toString())
// console.log(stu2.setName())
// console.log(stu2.getClass())

//protoType Inheritance
// const myDetail= {
//     isHuman: true,
//     printIntro: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }};
//   const myself = Object.create(myDetail);
//   myself.name = 'Harry'; // "name" is a property set on "me", but not on "person"
//   myself.printIntro();
// expected output: "My name is Harry. Am I human? true"


// function Factory(name, location) {
//     this.name = name;
//     this.location = location;
// }
// function Food(name, location) {
//     Factory.call(this, name, location);
//     this.category = 'food';
// }
// Factory.prototype.FactoryMethod = function FactoryMethod() { }
// function Product1() {
//     Factory.call(this)
// }
// Product1.prototype.constructor = Product1
// const myFood = new Food('Nestle', 'UK');
// console.log(myFood)

// function flour(flourCompany) {
//   this.flourCompany=flourCompany
// }
// function Cake(flourCompany,ingredients){
//     flour.call(this,flourCompany);
//     this.ingredients=ingredients
// }

// let Cake1=new Cake('sakti',['strawberry','candle'])
// console.log(Cake1)


// class car {
//     constructor(tire, window, steeringWheel) {
//         this.tire = tire
//         this.window = window
//         this.steeringWheel = steeringWheel
//     }
//     display() {
//         return (`It has ${this.tire} tire and ${this.window} window and ${this.steeringWheel} steering wheel`)
//     }
// };

// let car1=new car(4,4,1)
// console.log(car1.display())

// class truck extends car {
//     constructor(tire, window, steeringWheel, speed) {
//         super(tire, window, steeringWheel);
//         this.speed = speed
//     }
//     display(){
//         return `It has ${this.tire} tire and ${this.window} window and ${this.steeringWheel} steering wheel and has speed of ${this.speed}`
//     }
//     static total_speed(x,y){
//         return x+y
//     }
// }
// let truck1=new truck(4,4,1,80);
// console.log(truck1.display())
// console.log(truck.total_speed(80,90))

//Project-1
// class library {
//     constructor(books) {
//         this.book = books
//     }
//     bookList() {
//         return `List of book is : ${this.book}`
//     }
//     issueBook(bookname, user) {
//         console.log(`Book issued : ${bookname}`)
//         console.log(`Book issued : ${user}`)
//     }
//     returnBook(bookname) {
//         let index=this.book.indexOf(bookname)
//         if(index==-1){
//             console.log('Enter Valid book Name')
//         }
//         else{
//         this.book.splice(index,1)
//         console.log(this.book)
//         }
//     }
// };

// stu1 = new library(['gulliver travels', 'Invisible man', 'Pc clone','gulliver travels'])
// stu1.issueBook('gulliver travels', 'ayush')
// stu1.returnBook('gulliver travels')

// let arr=[2,4,3,6]
// arr.forEach(function(element,index){
//     console.log(element,index)
// })

// localStorage.setItem('key',JSON.stringify(stu1))
// array=JSON.parse(localStorage.getItem('key'))
// Array.from(stu1).forEach(function(element) {
//     console.log(element)
// });

// setTimeout(() => {
//     for (let index = 0; index < 200823; index++) {
//         const element = index;
//         console.log(element)
//     }
// }, 3000);

// console.log('hello')

// let student = [{ "name": "ayush", "class": 8 }, { "name": "vikas", "class": 9 }]

// function setStudent(students,callback) {
// setTimeout(() => {
//         student.push(students)
//         callback()
//     },
//  1000)};

// function getstudent() {
// setTimeout(() => {
//         student.forEach(function (element) {
//             console.log(element.name)
//             console.log(element.class)
//         })
//     }
// , 1000)};

// let stud = { "name": "rohan", "class": 9 }
// setStudent(stud,getstudent)

//promises
// let promises=new Promise(function(resolve,reject){
//     const x=12
//     const y=12
//     if(x==y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// promises.then(function(){
//     console.log("x=y")
// }).catch(function(){
//     console.log(' x is not equal to y')
// })

// let student = [{ "name": "ayush", "class": 8 }, { "name": "vikas", "class": 9 }]

// function setStudent(students) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 student.push(students)
//                 resolve()
//             }
//             else{
//                 reject()
//             }


//         },
//             1000)
//     })
// }

// function getstudent() {
//     setTimeout(() => {
//         student.forEach(function (element) {
//             console.log(element.name)
//             console.log(element.class)
//         })
//     }
//         , 1000)
// };

// let stud = { "name": "rohan", "class": 9 }
// setStudent(stud).then(getstudent).catch(function(){
//     console.log("some error occured")
// })

// let add=(a,b)=>a+b
// let show=a=>a

// console.log(show(5))

//Fetch API (get request)

// let btn=document.getElementById('btn')
// btn.addEventListener("click",func)

// function func(){
//     fetch("fruits.json").then((response=>{
//         return response.json()
//     })).then(data=>{
//         console.log(data)
//     })
// }

// (POST Request)
// function func(){
//     url="https://api.instantwebtools.net/v1/airlines";
//     data='{"id": 1315621,"name": "Sri1 Lankan Airways","country" : "Sri Lanka","logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png","slogan": "From Sri Lanka","head_quaters": "Katunayake, Sri Lanka","website": "www.srilankaairways.com","established": "1990"}'
//     params={
//         method:"post",
//         headers:{
//             'content-type':'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then(response=>response.json())
//     .then(data=>{
//         console.log(data)
//     })
// }

//Promises
// async function func(){
//     return "hello"
// }
// a=func()
// console.log(a)
// a.then(function(){
//     console.log("promise resolved")
// })

// async function func1() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Done with Async/Await!"), 5000)
//     });
//     let result = await promise; // wait until the promise resolves 
//     console.log(result);
// }
// func1();
// console.log('hello')

// async function func(){
//    const response=await fetch("https://api.github.com/users")
//    const user=await response.json()
//    return user
// }
// console.log('hello')
// data=func()
// console.log(data)
// data.then(user=>console.log(user)).catch(a=>console.log("error"))
// console.log('hello1')

// try{
//     throw new Error('new error')
//     console.log('hello')
// }
// catch(error){
//     console.log(error.message)
//     console.log("End of try-catch block")

// }

// let a = "Harry bhai";
// if (a !=undefined){
//     throw new Error('This is not defined');
// }
// else{
//     console.log('This is undefined');
// }

// try {
//     null.console
//     console.log("We are inside try block");

//     functionHarry();

// } catch(error) {
//     console.log(error)
//     console.log("Are you okay?");
//     console.log(error.name);
//     console.log(error.message);

// } finally {
//     console.log("Finally we will run this")
// }

//Regular expression:

// let reg=/ayush/g
// let str="Hello ayush ! how are you ayush ayush"

// let obj=reg.exec(str)
// console.log(obj)

// let obj=reg.test(str)
// console.log(obj)

// let obj=str.match(reg)
// console.log(obj)

// let search=str.search(reg)
// console.log(search)


// let result=str.replace(reg,"Rohan") -->It will replace all the ayush with Rohan
// console.log(result)

//MetaCharacter

// let reg=/ayu.h/
// reg=/ayu+h/
// reg=/ayu*h/
// reg=/ayush?/
// reg=/^ayu/
// reg=/sk$/
// reg=/^ay\$/

// let str="ay$ussk"
// let result=reg.test(str)
// console.log(result)


//character Set
// let regex=/ae{0,2}/
// let str="aeeello my name is ayush7"
// // let str = "01234567890123456789";
// // let regex = /(0|3|2)/g;
// let result=regex.test(str)
// result=str.match(regex)
// console.log(result)

//shorthand
// let regex=/\a/
// let str="aeeello my name is a*yush7"
// regex = /4r5r\B/;
// str = "harh7rd1r4r5r chai hyrryika number 899999harry9999";
// regex=/h(?!=y)/g
// let result=regex.test(str)
// result=str.match(regex)
// console.log(result

//iterator
// function myiterator() {
//     let counter = 0
//     return{
//         next:function(){
//             if(counter<5){
//                 counter++
//                 return{
//                     value: counter,
//                     done:false,
//                 }
//             }
//             else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }

// let iter=myiterator()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// function iterator(arr) {
//     counter = -1
//     return {
//         next: function () {
//             counter++
//             if (counter < arr.length) {
//                 return {
//                     value: arr[counter],
//                     done: false
//                 }

//             }
//             else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
// let arr = ["ayush", "rohan", "sheela", "vaibhav"]
// let iter=iterator(arr)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


//Generator
// function* awesomeGenerator(){
//     yield 'Hello World' // We pause the execution here
//     yield '1' // When we resume, we are here
//   }
// const gen=awesomeGenerator()
// console.log(gen.next())
// console.log(gen.next())

// for of loop
// let arr=[2,4,5,6]
// for(let data of arr){
//   console.log(data)
// }

//Maps
// let map=new Map()
// console.log(map)
// let key1="name",key2=function(){},key3={}
// map.set(key1,"Ayush");
// map.set(key2,"function")
// map.set(key3,"object")
// console.log(map)
// console.log(map.get(key1))
// console.log(map.size)

// for(let key of map.keys()){
//   console.log(key)
// }
// for(let values of map.values()){
//   console.log(values)
// }

// for(let [key,values] of map){
//   console.log(key,values)
// }

// map.forEach((value,key)=>{
//   console.log(key,value)
// })

// let myarr=Array.from(map)
// console.log(myarr)

//Sets
// let set=new Set()
// set.add('ayush')
// set.add('Rohan')
// set.add('ayush')  // no duplicate value is allowed
// set.delete('ayush')
// console.log(set)
// set.clear()
// for(let value of set){
//   console.log(value)
// }
// console.log(set.entries())
// console.log(set.has('ayush'))
// console.log(set.keys())
// console.log(set.values())
// set.forEach((element)=>{
//   console.log(element)
// })

//Object
let s1 = Symbol("symbol 1")
let s2 = Symbol("symbol 2")
// console.log(s1===s2)
// console.log(typeof s1)
// console.log(s1,s2)
// console.log(obj[s2])

// s1=()=>{
//   console.log('hello')
// }
// console.log(s1())

// for(key in obj){
//   console.log(key,obj[key])
// }
// let obj = {
//   [s1]: 'ayush',
//   [s2]: 'rohan',
//   name:"ayush"
// }
// for (let key in obj) {
//   console.log(key,obj[key]);
// }
// console.log(obj)
// console.log(JSON.stringify(obj))

// let id = Symbol("id");

// let person = {
//     name: "Jack",
//     age: 25,
//     [id]: 12
// };

// // using for...in
// for (let key in person) {
//     console.log(key,person[key]);
// }
// console.log(JSON.stringify(person))


//destructuring

//array destructuring
// let arr=[12,23,4,5,2,1,23];
// let [a,b,c,...d]=arr   //... ->spread syntax
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//object destructuring
let obj={
  Name:"Ayush",
  Age:18,
  Color:'Wheatish',
  height:"5 foot 7 inch"
}
console.log(obj)
let {Name,Age,Color,Height}=obj
console.log(Name)