

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

// NEWS
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Como funciona a RECICLAGEM DE LATINHAS DE ALUMÍNIO #Boravê 🔵Manual do Mundo",
    duration: "3 min",
    thumb: "https://storage.googleapis.com/eureciclo-blog/1/eco-3516734_1920.png",
    video_id: "wgPn3kZZtIY"
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o"
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
