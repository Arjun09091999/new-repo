
const take=document.getElementById('take');
const input=document.getElementById('input');
const btn=document.getElementById('btn');
const cont=document.getElementById('cont');
const send=document.getElementById('send');
const recive=document.getElementById('recive');
const messege=document.getElementById('messege');
const last=document.getElementById('last');




btn.addEventListener("click",(e)=>{
    if(input.value===""){
        alert("Plese write name");
    }else{

    
    e.preventDefault();
    const task=document.createElement('div');
    // task.innerText=`${input.value}`;

    cont.appendChild(task);
    document.querySelector('#take').style.display='none';
    document.querySelector('#chat').style.display='block';
    document.querySelector('#sss').style.display='block';
    }

});


last.addEventListener("click",(e)=>{
     e.preventDefault();
    const me=document.createElement('me');
    me.innerText=`${messege.value}`;
     send.appendChild(me);
     document.querySelector('#send').style.display='block';
})

last.addEventListener("click",(e)=>{
    e.preventDefault();
   const me=document.createElement('me');
   me.innerText=`${messege.value}`;
    recive.appendChild(me);
    document.querySelector('#recive').style.display='block';
})
