function validar(){
    console.log("Hi")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value
    console.log(vNombre)
    console.log(vNombre.length)
    if(vNombre.trim()==0){
        console.log("Debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
    }
    
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
    }
}