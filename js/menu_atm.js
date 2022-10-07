// Menu section
const btnConsultarSaldo = document.querySelector("#consultarSaldo");
const btnRetirarSaldo = document.querySelector("#retirarSaldo");
const btnIngresarMonto = document.querySelector("#ingresarMonto");
const formUserValue = document.querySelector('#inputUser_value');
const display = document.querySelector('#display');
const divAreaWork = document.getElementById('display');
const keyLocalStorage = 'keyLocalStorage';
let isSum = true;
let valueLocalStorage = JSON.parse(localStorage.getItem(keyLocalStorage));

valueLocalStorage.userSavingSystem = Number(valueLocalStorage.userSavingSystem);
formUserValue.style.display = 'none';



 let validInputUser = ()=> {
    let inputUserValue = Number(document.forms["myForm_user"]["inputUserValue"].value);
    if (inputUserValue < 1 
        || inputUserValue > 990
        || (valueLocalStorage.userSavingSystem - inputUserValue < 10 ) && isSum === false
        || (valueLocalStorage.userSavingSystem + inputUserValue > 990) && isSum === true
        ) {
        alert("El saldo total no puede ser menor a $10 o mayor a $990");
        return false;
    }
    else {
        isSum == true ? valueLocalStorage.userSavingSystem += inputUserValue: valueLocalStorage.userSavingSystem -= inputUserValue;
        divAreaWork.innerText = `Saldo actual: $${valueLocalStorage.userSavingSystem}`;
        localStorage.setItem(keyLocalStorage, JSON.stringify(valueLocalStorage))
    } 
 }



btnConsultarSaldo.addEventListener("click",  () =>{
    display.style.display = true;
    display.innerText = `Saldo actual: $${valueLocalStorage.userSavingSystem}`;
    formUserValue.style.display = 'none';
    isDisplay= true;
});


btnRetirarSaldo.addEventListener("click",  ()=>{
    display.style.display = false;
    formUserValue.style.display = 'block';
    isSum = false;
  });

  
  btnIngresarMonto.addEventListener("click",  () =>{
    display.style.display = false;
    formUserValue.style.display = 'block';
    isSum = true;
  });
  

  btnSubmitUser.addEventListener("click",  () =>{
    validInputUser();
  });

