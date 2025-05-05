function validar(){
    console.log("Hi")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    console.log(vNombre)
    let eErrorNombre = document.getElementById("errorNombre")
    console.log(vNombre.length)
    let eApellido = document.getElementById("apellido")
    console.log(eApellido)
    let vApellido = eApellido.value.trim()
    console.log(vApellido)
    let eErrorApellido = document.getElementById("errorApellido")
    console.log(vApellido.length)
    if(vNombre.trim()==0){
        console.log("Debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
        eErrorNombre.innerText=""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eErrorNombre.innerText = "Debes ingresar 3 caracteres como minimo"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }
   
    if(vApellido.trim()==0){
        console.log("Debes completar este campo")
    }
    else if(vApellido.length > 3){
        console.log("Cumple")
        eErrorApellido.innerText=""
        eApellido.style.backgroundColor = "green"
        eApellido.style.color = "white"
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eErrorApellido.innerText = "Debes ingresar 3 caracteres como minimo"
        eApellido.style.backgroundColor = "red"
        eApellido.style.color = "white"
    }
}