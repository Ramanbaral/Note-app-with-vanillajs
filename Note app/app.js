shownotes();
console.log("Welcome to raman App")

const addnotebtn=document.getElementById("addnotebtn")

addnotebtn.addEventListener("click",(e)=>{
    let textarea=document.getElementById("textarea")
    let notes=localStorage.getItem("notes")
    if(notes==null){
        noteobj=[]
    }
    else{
        noteobj=JSON.parse(notes)
    }
    noteobj.push(textarea.value);
    localStorage.setItem("notes",JSON.stringify(noteobj))
    textarea.value="";
    // console.log(noteobj)
    shownotes();
})

function shownotes(){
    let notes=localStorage.getItem("notes")
    if(notes==null){
        noteobj=[]
    }
    else{
        noteobj=JSON.parse(notes)
    }
    let html=""
    noteobj.forEach((element,index) => {
        html+=`
        <div class="notecard my-2 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`
    });
    let noteele=document.getElementById("notes")
    if(noteobj.length != 0){
        noteele.innerHTML=html
    }
    else{
        noteele.innerHTML=`No notes created. Create note!`
    }
}

function deletenote(index){
    // console.log("I am deleting note ",index)
    let notes=localStorage.getItem("notes")
    if(notes==null){
        noteobj=[]
    }
    else{
        noteobj=JSON.parse(notes)
    }
    noteobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteobj));
    shownotes()
}

const search=document.getElementById("searcharea");

search.addEventListener("input",()=>{
    let input=search.value.toLowerCase()
    // console.log("input event fired",input)
    let notecards=document.getElementsByClassName("notecard")
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        // console.log(cardtxt)
        if(cardtxt.includes(input)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})