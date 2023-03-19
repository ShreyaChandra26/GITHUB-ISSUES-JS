let pageNo=1;

let list=document.getElementById("list")
let title=document.getElementById("title")

function getIssue(pageNo){
    let URL=`https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`;
    fetch(URL).then((response)=>response.json())
    .then(data=>{
        console.log(data)
        list.innerHTML="";
        data.forEach(issue => {
            let item=document.createElement("li")
            item.textContent=issue.title
            list.appendChild(item)
            title.innerHTML=`Page Number-${pageNo}`
            
        });
    }).catch(err=>console.log(err))
    console.log(URL)
}

getIssue(pageNo)

function loadPrev(){
    if(pageNo>1){
        pageNo--
        getIssue(pageNo)
    }
}

function loadNext(){
    pageNo++
    getIssue(pageNo)
}