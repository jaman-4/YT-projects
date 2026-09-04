var side_navbar=document.querySelector(".side-navbar")

var side_navbar_toggle=document.querySelector(".navbar-menu-toggle")
side_navbar_toggle.addEventListener("click",function(){
    side_navbar.style.left="0%"
})

var xmark=document.querySelector(".side-navbar-xmark")
xmark.addEventListener("click",function(){
    side_navbar.style.left="-60%"
})

var subscribe_button=document.querySelector(".news-section button")
subscribe_button.addEventListener("click",function(){
    alert("Congratulation Now You Will Got All Updates")
})