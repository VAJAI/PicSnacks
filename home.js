function feedback(){
    var input = document.getElementById("input").value;
    var email = document.getElementById("email").value;
    
  
     var na =/^[A-Za-z]+/;
     var em =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
     
    
    if(!na.test(input)){
       alert("Enter Your Name");
    }
    else if(!em.test(email)){
      alert("Enter Your Email Address");
    }
    else{
      alert("Thanks For Your Feedback");
    }
  }


  function menubar(element){
    // let menu = document.querySelector('.menu');
    let menuList = document.querySelector('nav ul');
    menuList.classList.toggle('showmenu')
  }

  