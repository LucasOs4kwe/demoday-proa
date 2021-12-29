

// SCROLL SUAVE ENTRE ITENS DA MESMA PÁGINA (SETA)
$('.sectionz a').on('click', function (e) { 
    e.preventDefault();
    var id = $(this).attr('href');
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 156
    }, 500)
});


// ANIMAÇÃO SCROLL DE TEXTO E IMAGEM
const debounce = function(func, wait, imediatte){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!imediatte) func.apply(context,args);
        };
        const callNow = imediatte && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeStart(){
    const windowTop = window.pageYOffset + ((window.innerHeight) * 3 / 4);
    target.forEach(function(e){
        if(windowTop > e.offsetTop){
            e.classList.add(animationClass);
        }else{
            e.classList.remove(animationClass);
        }
    })
}
animeStart();
if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeStart();
    },50));
};


// MENU TOGGLE 
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show)
  show = !show;
})


