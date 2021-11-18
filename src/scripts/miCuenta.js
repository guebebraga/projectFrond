const boton = document.getElementById("crear");

const mailElemento= document.getElementById("mail");
const nameElemento = document.getElementById("name");
const passElemento = document.getElementById("password");


boton.addEventListener("click",()=>{
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
        .then(data => alert(" Resultado => " + data.message));
    }
    else{
        alert("Falta completar algun campo")
    }
});