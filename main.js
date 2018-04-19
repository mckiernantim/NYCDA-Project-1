let myButton = document.getElementById("orderButton")
let hiddenBox = document.getElementById("hiddenBox")
let animatedArray = document.getElementsByClassName("reveal");

myButton.addEventListener("click", function(){
   console.log("fuck this shit")
   hiddenBox.style.animationPlayState = ("running");
   
   })



// myButton.addEventListener("hover", function(){
//     myButton.style.animationDelay = ".5";
//     myButton.style.animationDuration = "2s";
//     myButton.style.animation = "buttonGrow";
//    })