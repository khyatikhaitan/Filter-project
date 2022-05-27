var filterbtn=document.querySelectorAll("#filter");
var shoetype=document.querySelectorAll(".col-4");

filterbtn.forEach(function(button){
  button.addEventListener("click",function(e){
    console.log(e);
    let val=e.target.dataset.filter;
    console.log(val);
    if(val==="platforms"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='platforms'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else if(val==="mules"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='mules'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else if(val==="wedges"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='wedges'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else if(val==="stilletoes"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='stilletoes'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else if(val==="highboots"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='highboots'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else if(val==="oxfords"){
      shoetype.forEach(function(type){
        if(type.dataset.item=='oxfords'){
          type.style.display="block";
        }
        else{
          type.style.display="none";
        }
      })
    }

    else{
      alert("Wrong Choice");
    }

  })
})
