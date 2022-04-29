const input = document.querySelector(".input")
const btn = document.querySelector(".short-btn")
const txt = document.querySelector(".url-txt")

//API url 
const base = "https://api.shrtco.de/v2/"

//1.Add eventos onChange p/ o input e onClick p/ o button:

let inputValue = ""                                             //2.Declarar variável para poder usar o valor em mais de um lugar

input.addEventListener("change", (event)=>{
    inputValue = event.target.value
})
 

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    if (inputValue === "") {
        txt.innerHTML = "Please add a link"
        txt.style.color ="#f46262"
        txt.style.fontStyle = "italic"
    } 
    fetch(`${base}shorten?url=${inputValue}`)                   //Solicitar dados da API e exibir esses dados em um local do html
        .then(response => response.json())
        .then(data =>{
            txt.innerHTML = data.result.short_link
            txt.style.color ="#2acfcf"
            txt.style.fontStyle = "normal"
    })
})



