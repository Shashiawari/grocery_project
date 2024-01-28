var groceries = document.getElementsByClassName("groceries") [0];
var pencil =document.getElementById("pencil");
var allitems=document.getElementById("allitems");
var userinp=document.getElementById("userinp");


pencil.addEventListener("click",function(){
    allitems.innerHTML="";
    pencil.style.background="black";
    setTimeout(function(){
        pencil.style.background= "blueviolet"
    },100)
})

userinp.addEventListener("keydown",(event) => {
        if (event.key == "Enter") {
            additem();
        }
    })

function additem(){
    var h2 = document.createElement("h2");
    h2.innerHTML= "- "+ userinp.value;
    h2.addEventListener("click",function(){
        h2.style.textDecoration="line-through";
    })
    allitems.insertAdjacentElement("beforeend",h2);
    userinp.value="";
}

