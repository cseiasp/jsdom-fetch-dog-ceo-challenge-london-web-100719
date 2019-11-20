

document.addEventListener("DOMContentLoaded", function() {
    
    loadImg()
    loadBreed()
    
    
})

function loadImg() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImg(json));
}

function renderImg(json){
    const div = document.getElementById("dog-image-container")
    json["message"].forEach(image => {
        const img = document.createElement("img")
        img.src = image
        div.appendChild(img)
    })
}

function loadBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        const breeds = Object.keys(json["message"])
            updateBreed(breeds)
            dropDownEventListener(breeds)
            })
}

        

function addBreed(breed){
    let ul = document.getElementById("dog-breeds")
    let li = document.createElement("li")
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', changeColour)
}

function updateBreed(breed){
    const ul = document.getElementById("dog-breeds")
    deleteAllChildElements(ul)
    breed.forEach( breed => addBreed(breed))
}

function dropDownEventListener(breeds){
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', (event) =>{
        const value = event.target.value
        listElementsStartingWith(value, breeds)
    })
}

function deleteAllChildElements(element){
    const ul = document.getElementById("dog-breeds")
    let child = element.lastElementChild  
    while (child) { 
        ul.removeChild(child)
        child = ul.lastElementChild
    } 
}

function changeColour(){
    const element = event.target
    element.style.color = "red"
}

function listElementsStartingWith(letter, breeds){
    const dogBreeds = breeds.filter(breed => breed.startsWith(letter))
    updateBreed(dogBreeds)
}

    
    
    
