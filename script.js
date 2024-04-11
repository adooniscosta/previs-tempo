

const key = "942035d9cf6f13272be67960fb2f4531"

function colocarDadosNaTela(dados){
    console.log(dados)
document.querySelector(".tempo").innerHTML =   "Tempo em " + dados.name
document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "ºC"
document.querySelector(".ceu").innerHTML =  dados.weather[0].description
document.querySelector(".graus-max").innerHTML = "max: " + Math.floor(dados.main.temp_max) + "ºC"
document.querySelector(".graus-min").innerHTML = "min: " + Math.floor(dados.main.temp_min
) + "ºC"
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
    const cidade = document.getElementById(`txt`).value
    
    buscarCidade(cidade)
}