var eKey = document.querySelector(".card.Key p:last-child");
var eLocation = document.querySelector(".card.Location p:last-child");
var eWhich = document.querySelector(".card.Which p:last-child");
var eCode = document.querySelector(".card.Code p:last-child");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");
var result = document.querySelector(".result");

document.addEventListener("keydown", e=>{

    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    result.innerText = e.code;
    
    alert.classList.add("hide");
    box.classList.remove("hide");
})
