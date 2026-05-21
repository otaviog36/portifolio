const botao = document.getElementById("modoClaroEscuro");
console.log(botao);
let claro = true;
botao.addEventListener("click", function() {
if (claro) {
document.body.style.backgroundColor = "#616161";
document.body.style.color = "black";
botao.textContent = "Dead mode";
botao.style.backgroundColor = "white";
botao.style.color = "black";

claro = true;
}else {
document.body.style.backgroundColor = "#7A1F3D";
document.body.style.color = "#fff2E1";
botao.textContent = "Alive mode";
botao.style.backgroundColor = "black";
botao.style.color = "white";

claro = false;
}
claro = !claro;
});
document.body.style.color = "#ffffff";

const carouselWrapper = document.querySelector('.carousel-wrapper');
if (carouselWrapper) {
    const slides = Array.from(document.querySelectorAll('.carousel-item'));
    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
        });
        currentIndex = index;
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    };

    updateSlide(currentIndex);
    setInterval(nextSlide, 4000);
}
