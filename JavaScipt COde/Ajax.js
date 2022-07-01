// console.log('Ajax Practice')
// let fetchBtn=document.getElementById('fetchBtn')
// fetchBtn.addEventListener("click",buttonClickHandler)

// function buttonClickHandler(){
//     console.log("You clicked fetchBtn")
//     const xhr= new XMLHttpRequest();
//     xhr.open('GET','ayush.txt',false)
//     xhr.onprogress=function(){
//         console.log("On progress")
//     }
//     xhr.onload=function(){
//         let text=document.getElementById('text')
//         if(this.status==200){
//         text.innerHTML=this.responseText}

//         else{
//             console.log('bad request')
//         }
//     }
//     xhr.send()
//     console.log('hello')
// }

// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandler);

// function popHandler() {
//     console.log('You have clicked the pop handler');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             str = "";
//             for (key in obj)
//             {
//                 str += `<li>${obj[key].employee_name} </li>`;
//             }
//             list.innerHTML = str;
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     xhr.send();
//     console.log("We are done fetching employees!");
    
// }

let fetchBtn=document.getElementById('fetchBtn')
fetchBtn.addEventListener("click",buttonClickHandler)

function buttonClickHandler(){
    console.log("You clicked fetchBtn")
    const xhr= new XMLHttpRequest();
    xhr.open('GET','fruits.json',true)
    xhr.onprogress=function(){
        console.log("On progress")
    }
    xhr.onload=function(){
        let list=document.getElementById('list')
        if(this.status==200){
        let obj=JSON.parse(this.responseText)
        let obj1=obj.fruits
        console.log(obj1)
        str=""
        obj1.forEach(element => {
            str+=`<li>${element.image}</li>`
            list.innerHTML=str
        });
        }
        else{
            console.log('bad request')
        }
    }
    xhr.send()
    console.log('hello')
}
