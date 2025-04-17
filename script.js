let search = document.getElementsByClassName("fa-magnifying-glass")[0];
search.addEventListener("click",()=>{
    // alert("404 page not found")
    prompt("how may i help you")
})


let navbtn = document.getElementsByClassName("nav-btn")[0]
navbtn.addEventListener("mouseover",function(){
    navbtn.style.color = "red"
    navbtn.style.backgroundColor = "black"
})
navbtn.addEventListener("mouseout",function(){
    navbtn.style.color = "white"
    navbtn.style.backgroundColor = "black"
})