const inp = document.querySelector("#first-text")
const subBtn = document.querySelector("#submit-button")
const txt = document.querySelector(".text")

// const delText = document.querySelector("#delText")
const update = document.querySelector("#update")
const writeDiv = document.querySelector("#write")

subBtn.addEventListener("click", toDoList)



function toDoList(){
    const div = document.createElement("div")
    div.classList.add("text-div")
    writeDiv.insertAdjacentElement("afterend", div)
    const txt = document.createElement("p")
    txt.textContent = inp.value
    div.insertAdjacentElement("afterbegin", txt)
    const didBtn = document.createElement("button")
    didBtn.setAttribute("id", "did")
    didBtn.textContent = "зачеркнуть"
    txt.insertAdjacentElement("afterend", didBtn)
    const corrBtn = document.createElement("button")
    corrBtn.setAttribute("id", "corr")
    corrBtn.textContent = "исправить"
    didBtn.insertAdjacentElement("afterend", corrBtn)
    const delBtn = document.createElement("button")
    delBtn.setAttribute("id", "del")
    delBtn.textContent = "удалить"
    corrBtn.insertAdjacentElement("afterend", delBtn)

    inp.value = ""

    didBtn.addEventListener("click", () => {
        const didBtn = document.querySelector("#did")
        // const del = document.createElement("del")
        // update.insertAdjacentElement("afterbegin", del)
        // del.classList.add("delTxt")
        // del.textContent = txt.textContent
        // del.style.display = "block"
        // txt.remove()
        if (txt.style.textDecoration = "none") {
            didBtn.addEventListener("click", () => {
                txt.style.textDecoration = "line-through"
            })
        }
        // txt.style.textDecoration = "line-through"
        if (txt.style.textDecoration = "line-through") {
            didBtn.addEventListener("click", () => {
                txt.style.textDecoration = "none"
            })
        }
    })

    corrBtn.addEventListener("click", () => {
        const corrBtn = document.querySelector("#corr")

        //if(txt.length){ 
        const newInput = document.createElement("input")
        newInput.setAttribute("type", "text")
        // newInput.setAttribute("value", "ninp")
        txt.append(newInput)
        const newBtn = document.createElement("button")
        newBtn.textContent = "пойдет"
        newInput.insertAdjacentElement("afterend", newBtn)
        newBtn.addEventListener("click", () => {
            txt.textContent = newInput.value
            newInput.remove()
            newBtn.remove()
        })
        //}
    })


    delBtn.addEventListener("click", () => {
        const delBtn = document.querySelector("#del")
        const corrBtn = document.querySelector("#corr")
        const didBtn = document.querySelector("#did")


        // console.log(txt.textContent)
        txt.textContent = ""
        txt.style.textDecoration = "none"
        delBtn.remove()
        corrBtn.remove()
        didBtn.remove()

    })

}


