const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

        let claro = true;
botao.addEventListener("click", function() {
if (claro) {
document.body.style.backgroundColor = "#212529";
document.body.style.color = "#f8f9fa";
botao.textContent = "Modo Escuro";
botao.style.backgroundColor = "white";
botao.style.color = "black";

claro = true;
}else {
document.body.style.backgroundColor = "#e5e5e5";
document.body.style.color = "#6a040f";
botao.textContent = "Modo Claro";
botao.style.backgroundColor = "black";
botao.style.color = "white";

claro = false;
}
claro = !claro;
});
document.body.style.color = "#6a040f";