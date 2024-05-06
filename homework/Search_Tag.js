var content = document.querySelector(".tag__body");
var input = document.querySelector(".tag__body input");
var tags = ["Nodejs", "Reactjs"];
var btnRemoveAll = document.querySelector(".btn__remove");

function render(){
    content.innerHTML=""
    for(var i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += ` <li>
                                    ${tag}
                                    <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                                </li>`
    }
    content.appendChild(input);
    input.focus();
}
render();

input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        tags.push(input.value.trim());
        input.value = "";
        render();
    }
})

function removeTag(index){
    tags.splice(index, 1);
    render();
}

btnRemoveAll.addEventListener("click", function(){
    tags = []
    render()
})

