let input = document.querySelector("#inp")
let button = document.querySelector(".add-btn")
let ulList = document.querySelector(".item-list")

// add button
button.addEventListener( "click" , () => {
    if(input.value === ""){
        alert("enter something")
    }

    addList()
    addDelet()
    input.value = ""
} )


// adding list item in ulList
function addList (){
    let li = document.createElement("li")
    li.textContent = input.value
    ulList.appendChild(li)
}

// add delete button
function addDelet(){
    let List = document.querySelector("li")
    let delBtn = document.createElement("button")
    delBtn.innerText = "Delet"
    List.appendChild(delBtn)

    delBtn.addEventListener("click", ()=> {
        ulList.removeChild(List)
    })

}

