//tomo elementos del form crear cuenta
const botonCrear = document.getElementById("crear");
const mailElemento= document.getElementById("mail");
const nameElemento = document.getElementById("name");
const passElemento = document.getElementById("password");

// tomo elementod del form login
const botonLogin = document.getElementById("login");
const mail2Elemento = document.getElementById("mail2");
const pass2Elemento = document.getElementById("pass");


botonCrear.addEventListener("click",()=>{
    const mail = mailElemento.value;
    const name = nameElemento.value;
    const pass = passElemento.value;

    if(mail && pass && name){
        const objetoBody ={
            mail : mail,
            name: name,
            password: pass
            
        };
        fetch("http://localhost:4000/miCuenta/registro" , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objetoBody),
        })
        .then(response => response.json())
        .then(data => alert(data.message));
    }
    else{
        alert("Debe completar todos los campos")
    }
});

botonLogin.addEventListener("click",()=>{
    const mail2 = mail2Elemento.value
    const pass2 = pass2Elemento.value

    if(mail2 && pass2){
        const objBody ={
            mail : mail2,
            password: pass2
            
        };
        fetch("http://localhost:4000/miCuenta/login" , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objBody),
        })
        .then(response => response.json())
        .then(data => alert(data.message));
        
        if(!data.error){
         localStorage.setItem("token", response.token);
        }
    }
    else {
        alert('Debe completar todos los campos')
    }

});