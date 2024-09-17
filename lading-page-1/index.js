const ICON_POINTER_SCROLL = document.getElementById("mouseContainer");
const IMAGENS_LOGO = [""];
const LOGO = document.querySelector('#logoNavBar');
const ELEMENTS = document.querySelectorAll(".smooth-scroll");
const SVGWAVE = document.querySelectorAll(".wave-svg");
const SECTIONINFO2 = document.querySelector(".container-section2-info");
const SCALERIGHT = document.querySelector(".scale-up-hor-right");
const SCALELEFT = document.querySelector(".scale-up-hor-left");
const TEXTSCALE = document.getElementsByClassName("text-scale");
const COUNTERS = document.querySelectorAll(".counterAnimation")


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
  
    if (IMAGENS_LOGO.length === 0) return;
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
            Array.from(TEXTSCALE).forEach(text => text.style.opacity = '1');  // Fix for TEXTSCALE
        }else{
            SECTIONINFO2.style.opacity = '0';
            SECTIONINFO2.style.transition = '1s';
            SCALERIGHT.style.animationName = '';
            SCALELEFT.style.animationName = '';
            Array.from(TEXTSCALE).forEach(text => text.style.opacity = '0');  // Fix for TEXTSCALE
        }
    });
}
const counterFunc = (element) => {
    let startValue = 0;
    let endValue = parseInt(element.getAttribute("data-val"));
    const totalDuration = 1000;
    const intervalTime = 10;

    const incrementValue = endValue / (totalDuration / intervalTime);

    let counter = setInterval(() => {
        startValue += incrementValue;
        if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(counter);
        }
        element.textContent = Math.floor(startValue);
    }, intervalTime);
};



const countShowNumber = () => {
    const array = Array.from(COUNTERS);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
}
    






const initialization = () => {
    scrollRiseSmooth();
    countShowNumber();
    showScroll();
    showNumberAnimation();
    changeLogoNavBar();
    invisiblePointerMouse();
    window.addEventListener('scroll', invisiblePointerMouse);

}
initialization();
