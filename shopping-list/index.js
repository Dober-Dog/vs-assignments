const form = document.addItem
const list = document.getElementById("list")






form.addEventListener("submit", function(event){
    event.preventDefault()
    const newItem = form.title.value
    form.title.value = ""
    const newList = document.createElement("li")
    const grocery = document.createElement("div")
    const erase = document.createElement("button")
    const edit = document.createElement("button")
    const correction = document.createElement("input")
    const save = document.createElement("button")
    grocery.textContent = newItem
    erase.textContent = "X"
    edit.textContent = "Edit"
    save.textContent = "Save"
    correction.id = "fix"
    erase.addEventListener("click", function(){
        newList.remove()
    })
    edit.addEventListener("click", function(){
        grocery.append(correction)
        edit.remove()
        newList.append(save)
    })
    save.addEventListener("click", function(event){
        event.preventDefault()
        const newGrocery = document.getElementById("fix").value
        correction.remove()
        save.remove()
        grocery.textContent = newGrocery
        newList.append(edit)
    })
    newList.append(grocery)
    newList.append(erase)
    newList.append(edit)
    list.append(newList)
})