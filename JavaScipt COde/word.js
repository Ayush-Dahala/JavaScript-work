let addBtn=document.getElementById('addBtn')
addBtn.addEventListener("click",func)
function func(){
    console.log('hello')
    let xhr=new XMLHttpRequest();
    xhr.open('GET','word.json',true)
    xhr.onprogress=function(){
        console.log("on progress")
    }
    xhr.onload=function(){
        let definitions=document.getElementById('definitions')
        if(this.status==200){
            let words=JSON.parse(this.responseText)
            console.log(words)
            let str=""
            let word1=words.results
            word1.forEach(function(element){
                str+=`<li>${element.definition}</li>`
                definitions.innerHTML=str
            });
        }
        else{
            console.log("Bad request")
        }
    } 
    xhr.send()
}