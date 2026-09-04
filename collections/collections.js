// side navbar
var side_navbar = document.querySelector(".side-navbar")

var side_navbar_toggle = document.querySelector(".navbar-menu-toggle")
side_navbar_toggle.addEventListener("click", function () {
    side_navbar.style.left = "0%"
})

var xmark = document.querySelector(".side-navbar-xmark")
xmark.addEventListener("click", function () {
    side_navbar.style.left = "-60%"
})

//collections
var search = document.getElementById("search")
search.addEventListener("keyup", function () {
    var products_container = document.querySelector(".products")
    var productslist = products_container.querySelectorAll("div")
    var product_box = document.querySelector(".products-box")

    var enteredText = search.value.toUpperCase()
    for (count = 0; count < productslist.length; count = count + 1) {

        if (productslist[count].querySelector("p").textContent.toUpperCase().indexOf(enteredText) < 0) 
            { productslist[count].style.display = "none" }
        else {
            productslist[count].style.display = "block"
        }
    }
})

// var black_t_shirt = document.getElementById("black-t-shirt")
// black_t_shirt.addEventListener("click", function () {
//     window.location.href = "black t shirt.html"
// })



