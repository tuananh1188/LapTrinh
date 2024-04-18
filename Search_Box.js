var btnSearch = document.querySelector(".search-box__btn")

btnSearch.addEventListener("click", function(){
    document.querySelector(".search-box").classList.toggle("open");
    document.querySelector(".search-box__input").focus();
})