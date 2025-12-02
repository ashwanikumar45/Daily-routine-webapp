let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let dltbtns = document.querySelectorAll(".delete");

btn.addEventListener('click', function () {
    let li = document.createElement("li");
    li.innerText = ipt.value;
    ul.appendChild(li);
    ipt.value = "";

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    li.appendChild(dltbtn);
})

ul.addEventListener("click", function (event) {
     if (event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    }
})
