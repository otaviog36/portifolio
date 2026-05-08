const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

    let claro = true;
    botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "#343a40";
        document.body.style.color = "white";
        botao.textContent = "Modo Escuro";
        botao.style.backgroundColor = "white";
        botao.style.color = "black";
        claro = true;
    }else {
        document.body.style.backgroundColor = "#e5e5e5";
        document.body.style.color = "black";
        botao.textContent = "Modo Claro";
        botao.style.backgroundColor = "black";
        botao.style.color = "white";

        claro = false;
    }
    claro = !claro;
});