var signUp = document.getElementById("signUp");
var signIn = document.getElementById("signIn");
var nameInput = document.getElementById("nameInput");
var title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Contacto";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}


signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
} 
