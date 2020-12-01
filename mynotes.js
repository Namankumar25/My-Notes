shownotes();


let addnote=document.getElementById('addnote');
addnote.addEventListener('click',function(e){

let notetext=document.getElementById('notetext');
let notetitle=document.getElementById('notetitle');    

let notes=localStorage.getItem('notes');  
let title=localStorage.getItem('title');
    

if(notes==null&&title==null)
    {
    notesobj=[];   
    titleobj=[];    
    }
else
    {
    notesobj=JSON.parse(notes);
    titleobj=JSON.parse(title);    
    }
    
notesobj.push(notetext.value); 
titleobj.push(notetitle.value);
    
localStorage.setItem('notes',JSON.stringify(notesobj));
localStorage.setItem('title',JSON.stringify(titleobj));   
    
    
notetext.value="";    
notetitle.value="";

shownotes();
});

//show notes stored in local storage

function shownotes(){

let notes = localStorage.getItem('notes');    
let title=localStorage.getItem('title');
    
if(notes==null&&title==null)
    {
    notesobj=[];   
    titleobj=[];    
    }
else
    {
    notesobj=JSON.parse(notes);
    titleobj=JSON.parse(title);    
    }

let htmlnotes="";
for(i=0,j=0;i<notesobj.length,j<titleobj.length;i++,j++)
{
htmlnotes+=`<div class="card ml-2 my-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${titleobj[j]}</h5>
        <p class="card-text">${notesobj[i]}</p>
        <a onclick="deletenote(${i},${j})" class="btn btn-danger" style="color:white">Delete note</a>
      </div>
    </div>`    
}    
    
    
    
let noteshtml=document.getElementById('noteshtml');
if(notesobj.length==0)
{
noteshtml.innerHTML="<b><i>Till now you have not created any notes</i></b>"    
}
    
else{
noteshtml.innerHTML=htmlnotes;    
}    
        

    
}

//delete a note

function deletenote(indexn,indext){    
let notes=localStorage.getItem('notes');    
let title=localStorage.getItem('title');
    
if(notes==null&&title==null)
    {
    notesobj=[];   
    titleobj=[];    
    }
else
    {
    notesobj=JSON.parse(notes);
    titleobj=JSON.parse(title);    
    }    
 
titleobj.splice(indext,1);
notesobj.splice(indexn,1);
    
    
localStorage.setItem('notes',JSON.stringify(notesobj));  
localStorage.setItem('title',JSON.stringify(titleobj));    
shownotes();    
}






//search box
let search=document.getElementById('searchtext')
search.addEventListener('input',function(){
let inputval=search.value;    
let card=document.getElementsByClassName('card');
  

Array.from(card).forEach(function(element){
let notetext=element.getElementsByTagName('p')[0].innerHTML;

if(notetext.includes(inputval)){
element.style.display="block";
}    
    
else{
element.style.display="none";    
}    
    
   
});

notetext="";  
    
    
});


let searchtitle=document.getElementById('searchtitle')
searchtitle.addEventListener('input',function(){
let inputval1=searchtitle.value;    
let card=document.getElementsByClassName('card');
  

Array.from(card).forEach(function(element){
let notetext=element.getElementsByTagName('h5')[0].innerHTML;

if(notetext.includes(inputval1)){
element.style.display="block";
}    
    
else{
element.style.display="none";    
}    
    
   
});

notetext="";  
    
    
});