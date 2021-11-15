const boton = document.getElementById("ingresar");
const mailElemento= document.getElementById("mail");

const passElemento = document.getElementById("password");

boton.addEventListener("click",()=>{
    const mail = mailElemento.value;
    const pass = passElemento.value;

    if(mail && pass){
        const objetoBody ={
            mail : mail,
            pass: pass,
        };
        fetch("http://localhost:4000" , {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objetoBody),
        })
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            debugger;

            if(!response.error){
                localStorage.setItem("token",response.token);
                alert("LO HICISTE")
            }
            else{
                alert("O NO!")
            }
        });
    }
    else{
        alert("Falta completar algun campo")
    }
});