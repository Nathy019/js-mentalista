function Chutar() {
    let numeroSecreto = Math.floor (10*Math.random())
    console.log(numeroSecreto)
    let chute = document.getElementById ("valor").value
    let certo = '<img src="imagens/certo.webp"> <height = "30" widht ="30">'
    let erro = '<img src="imagens/erro.png"> <height = "50" widht ="50">'
    if (chute == numeroSecreto){
        // verdadeiro 
        document.getElementById("resultado").innerHTML = '<img src="imagens/certo.webp"> <height = "30" widht ="30">'
        
    }
    else {
        //falso
        document.getElementById("resultado").innerHTML = '<img src="imagens/erro.png"> <height = "50" widht ="50">'
    }
}