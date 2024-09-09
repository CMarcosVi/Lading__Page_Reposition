const ICON_POINTER_SCROLL = document.getElementById("mouseContainer");
const IMAGENS_LOGO = [""];
const LOGO = document.querySelector('#logoNavBar');
const ELEMENTS = document.querySelectorAll(".smooth-scroll");
const SVGWAVE = document.querySelectorAll(".wave-svg");
const SECTIONINFO2 = document.querySelector(".container-section2-info");
const SCALERIGHT = document.querySelector(".scale-up-hor-right");
const SCALELEFT = document.querySelector(".scale-up-hor-left");
const TEXTSCALE = document.getElementsByClassName(".text-scale");


const invisiblePointerMouse = () => {
    const posicaoDoScroll = window.scrollY;
    if(posicaoDoScroll  >= 2){
        ICON_POINTER_SCROLL.style.opacity = '0';
        ICON_POINTER_SCROLL.style.transition = '.5s';
    }else{
        ICON_POINTER_SCROLL.style.opacity = '1';
    }
}

const scrollRiseSmooth = () => {
    window.addEventListener("scroll" , () => {
        const scrollPosition = window.scrollY;

        ELEMENTS.forEach((element,index) => {
            const offset = scrollPosition * .175 * (index + 1);
            if(window.innerWidth < 684){
                element.style.transform = `translateY(-${offset}px)`;
            }else{
                element.style.transform = `translateY(+${offset}px)`;
            }
            console.log(offset);
        });
        SVGWAVE.forEach((element,index) => {
            const offset = scrollPosition * .55 * (index + 1);
            if(window.innerWidth < 684){
                element.style.translate = `translateX(-${offset}px) rotate(180deg)`
            }else{
                element.style.transform = `translateX(-${offset}px) rotate(180deg)`
            }
            console.log(scrollPosition)
        });
    })

}
/*const scrollLateralSmooth = () => {
    window.addEventListener("scroll" , () => {
        const scrollPosition = window.scrollY;

        SVGWAVE.forEach((element,index) => {
            const offset = scrollPosition * .55 * (index + 1);
            if(window.innerWidth < 684){
                element.style.translate = `translateX(-${offset}px ) rotate(180deg)`
            }else{
                element.style.transform = `translateX(-${offset}px) rotate(180deg)`
            }
            console.log(offset)
        });
    })

}*/

const changeLogoNavBar = () => {
    let indexImagemAtual = 0;
  
    const novaImagem = new Image();
    novaImagem.src = novaImagem.alt = IMAGENS_LOGO[indexImagemAtual];
    novaImagem.classList.add('dda');
    LOGO.appendChild(novaImagem);
  
    window.addEventListener('scroll', () => {
      const alturaJanela = window.innerHeight;
      const quantidadeScroll = window.scrollY;
      const quantasVezes100vh = Math.floor(quantidadeScroll / alturaJanela);
  
      if (quantasVezes100vh % 2 !== indexImagemAtual % 2) {
        novaImagem.src = novaImagem.alt = IMAGENS_LOGO[++indexImagemAtual % IMAGENS_LOGO.length];
      }
    });
}

const showScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition >= 300){
            SECTIONINFO2.style.opacity = '1';
            SECTIONINFO2.style.transition = '1s';
            SCALERIGHT.style.animationName = 'scale-up-hor-right';
            SCALELEFT.style.animationName = 'scale-up-hor-left';
            TEXTSCALE.style.opacity = '1';
        }else{
            SECTIONINFO2.style.opacity = '0';
            SECTIONINFO2.style.transition = '1s';
            SCALERIGHT.style.animationName = '';
            SCALELEFT.style.animationName = '';
            TEXTSCALE.style.opacity = '0';
        }
    });
}

const initialization = () => {
    scrollRiseSmooth();
    showScroll();
    changeLogoNavBar();
    invisiblePointerMouse();
    window.addEventListener('scroll', invisiblePointerMouse);
}
initialization();
