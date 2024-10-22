// Controle da Sidebar
let header = document.getElementById('header');
let navigationHeader = document.getElementById('navigation_header');
let content = document.getElementById('content');
let showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
});

// Controle do Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const slideInterval = 3000;

// Função para mover slides
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para autoplay
function autoPlay() {
    moveSlide(1);
}

// Iniciar autoplay
setInterval(autoPlay, slideInterval);

function redirecionarCadastro() {
    const opcao = document.getElementById("cadastroSelect").value;
    if (opcao === "doador") {
      window.open("cadastro/cadastroDoador.html", "_blank");
    } else if (opcao === "instituicao") {
      window.open("cadastro/cadastroInstituicao.html", "_blank");
    }
  }
  