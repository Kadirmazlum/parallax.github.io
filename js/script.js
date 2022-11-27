var typed = new Typed(".input", 
            {strings:["Kadir Mazlum.", "Web Developer.", "UX Designer."], 
            typeSpeed: 70,
            backSpeed: 60,
            loop:true 
        }
)

var hamburg = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var navlist = document.querySelector(".nav-list li");

hamburger.addEventListener("click",function(){
    this.classList.toggle("clik");
    navlist.classList.toggle("open");
})
