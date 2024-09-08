const ICON_POINTER_SCROLL = document.getElementById("mouseContainer");
const IMAGENS_LOGO = [""];
const LOGO = document.querySelector('#logoNavBar');


const invisiblePointerMouse = () => {
    var posicaoDoScroll = window.scrollY;
    if(posicaoDoScroll  >= 2){
        ICON_POINTER_SCROLL.style.opacity = '0'
        ICON_POINTER_SCROLL.style.transition = '.5s'
    }else{
        ICON_POINTER_SCROLL.style.opacity = '1'
    }
}

const changeLogoNavBar = () => {
    let indexImagemAtual = 0;
  
    const novaImagem = new Image();
    novaImagem.src = novaImagem.alt = IMAGENS_LOGO[indexImagemAtual];
    novaImagem.classList.add('dda');
    LOGO.appendChild(novaImagem);
  
    window.addEventListener('scroll', function () {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexImagemAtual % 2) {
        novaImagem.src = novaImagem.alt = IMAGENS_LOGO[++indexImagemAtual % IMAGENS_LOGO.length];
      }
    });
}

const initialization = () => {
    changeLogoNavBar();
    invisiblePointerMouse();
    window.addEventListener('scroll', invisiblePointerMouse);
}
initialization();
