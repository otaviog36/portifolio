const botao = document.getElementById("modoClaroEscuro");
const foto = document.getElementById("minhaFoto");
let claro = true;

if (botao) {
    botao.addEventListener("click", function() {
        if (claro) {
            document.body.style.backgroundColor = "#616161";
            document.body.style.color = "black";
            botao.textContent = "Dead mode";
            botao.style.backgroundColor = "white";
            botao.style.color = "black";
            if (foto) {
                foto.style.borderColor = "black";
            }
        } else {
            document.body.style.backgroundColor = "#7A1F3D";
            document.body.style.color = "#fff2E1";
            botao.textContent = "Alive mode";
            botao.style.backgroundColor = "black";
            botao.style.color = "white";
            if (foto) {
                foto.style.borderColor = "white";
            }
        }
        claro = !claro;
    });
}

document.body.style.color = "#ffffff";
if (foto) {
    foto.style.borderColor = "white";
}


// utilização do date
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();
let hoje = diaAtual + mesAtual + anoAtual;

// date tempo restante
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 30;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let anoRestante = anoFormatura - anoAtual;
let mesRestante = mesFormatura - mesAtual;
let diaRestante = diaFormatura - diaAtual;
    document.getElementById("tempoRestanteParaFormatura").innerText = 
        `Faltam:
        ${anoRestante} ano(s), ${mesRestante} meses e ${diaRestante} dias`;
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Faltam: ${mesRestante} meses e ${diaRestante} dias`;
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Faltam: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Faltam: ${anoFormatura - anoAtual} anos`;
}