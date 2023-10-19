"Use Strict";
function showMessage(){
    const middleName = "Xochitl";
    const messageEl = document.getElementById("message");
    // Hello [], it's nice to meet you!
    //messageEl.innerHTML = "Hello " + Name + " , it's nice to meet you!"; //Concatentation
    messageEl.innerHTML = `Hello ${middleName}, it's nice to meet you!`; //Interpolation
}
showMessage();
