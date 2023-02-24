

function datosUsuario(){
    let nombre = prompt("Ingrese su nombre!")
    let apellido = prompt("Ingrese su apellido")
    alert("Bienvendio "+nombre+" "+apellido)
    return datosIngresados = (nombre + " " + apellido)
}

function preguntasFutbol(){

    let pregunta1 = parseInt(prompt("¿Que dia Argentina le gano una final a Francia? \n 1) 18 de diciembre \n 2) 18 de marzo"))
    let puntos = 0
    
    if(pregunta1 === 1){
        alert("Correcto, sumaste 20 pts.")
        puntos = puntos + 20
    } else if(pregunta1 === 2){
        alert("Incorrecto")
    } else{
        alert("Numero incorrecto")
    }

    let pregunta2 = parseInt(prompt("¿Cuantas finales Angel Di Maria metio gol? \n 1) 3 finales \n 2) 2 finales"))
        
    if(pregunta2 === 1){
        puntos = puntos + 20
        alert("Correcto, sumaste 20 pts. Llevas: "+ puntos)
    } else if(pregunta2 === 2){
        alert("Incorrecto")
    }  else{
        alert("Numero incorrecto")
    }

    let pregunta3 = parseInt(prompt("¿Cuantos mundiales gano Neymar? \n 1) 1 mundial \n 2) ninguno"))
        
    if(pregunta3 === 2){
        puntos = puntos + 20
        alert("Correcto, sumaste 20 pts. llevas: "+ puntos)
    } else if(pregunta3 === 1){
        alert("Incorrecto")
    }  else{
        alert("Numero incorrecto")
    }
    
    let pregunta4 = parseInt(prompt("¿Cuantas Copas Libertadores tiene Flamengo? \n 1) 3 Libertadores \n 2) 4 Libertadores"))
        
    if(pregunta4 === 1){
        puntos = puntos + 20
        alert("Correcto, sumaste 20 pts. llevas: "+ puntos)
    } else if(pregunta4 === 2){
        alert("Incorrecto")
    }  else{
        alert("Numero incorrecto")
    }

    let pregunta5 = parseInt(prompt("¿Cuantos Copas del Mundo tiene El Real Madrid? \n 1) 5 Copas del Mundo \n 2) 8 Copas del Mundo"))
        
    if(pregunta5 === 2){
        puntos = puntos + 20
        alert("Correcto, sumaste 20 pts. llevas: "+ puntos)
    } else if(pregunta5 === 1){
        alert("Incorrecto")
    }  else{
        alert("Numero incorrecto")
    }
        
    alert("felicitaciones "+datosIngresados+" Sumaste "+ puntos +" puntos. Espero que te haya gustado el juego!!")

}

window.addEventListener('load',function(){

    datosUsuario()
    alert("Vamos a ver que tanto sabes de futbol!!")
    preguntasFutbol()

})