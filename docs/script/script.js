const botao = document.getElementById("modoClaroEscuro");
const foto = document.getElementById("minhaFoto");
const COOKIE_NAME = "portfolio_theme";
const THEME_ALIVE = "alive";
const THEME_DEAD = "dead";

function getCookieValue(name) {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const [chave, valor] = cookie.trim().split("=");

        if (chave === name) {
            return valor;
        }
    }

    return null;
}

function setThemeCookie(theme) {
    document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000`;
}

function applyTheme(theme) {
    const isAlive = theme === THEME_ALIVE;

    document.body.style.backgroundColor = isAlive ? "#7A1F3D" : "#616161";
    document.body.style.color = isAlive ? "#fff2E1" : "black";

    if (botao) {
        botao.textContent = isAlive ? "Alive mode" : "Dead mode";
        botao.style.backgroundColor = isAlive ? "black" : "white";
        botao.style.color = isAlive ? "white" : "black";
    }

    if (foto) {
        foto.style.borderColor = isAlive ? "white" : "black";
    }
}

let currentTheme = getCookieValue(COOKIE_NAME) || THEME_ALIVE;

if (botao) {
    botao.addEventListener("click", function() {
        currentTheme = currentTheme === THEME_ALIVE ? THEME_DEAD : THEME_ALIVE;
        setThemeCookie(currentTheme);
        applyTheme(currentTheme);
    });
}

applyTheme(currentTheme);

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