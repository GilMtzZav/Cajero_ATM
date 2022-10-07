// Login
const btnSubmit = document.getElementById("btnSubmit");

const keyLocalStorage = "keyLocalStorage";

function login() {
  let validUser = false;

  currentUser.userNameSystem = document.forms["myForm"]["inputFullName"].value;
  currentUser.userPassSystem = document.forms["myForm"]["inputUserPassword"].value;

  for (let index = 0; index < userAccounts.length; index++) {
    if (
      userAccounts[index].userNameSystem === currentUser.userNameSystem &&
      userAccounts[index].userPassSystem === currentUser.userPassSystem
    ) {
      validUser = true;
      currentUser.userSavingSystem = userAccounts[index].userSavingSystem;
      localStorage.setItem(keyLocalStorage, JSON.stringify(currentUser));
    }
  }

  if (!validUser) {
    alert('Usuario o contraseña incorrecta');
    return false;
  }

  return true;
}
