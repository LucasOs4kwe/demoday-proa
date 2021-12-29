
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

const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Como funciona a RECICLAGEM DE LATINHAS DE ALUMÍNIO #Boravê 🔵Manual do Mundo",
    duration: "3 min",
    thumb: "https://i.ytimg.com/vi/wgPn3kZZtIY/maxresdefault.jpg",
    video_id: "wgPn3kZZtIY",
    canal: "Manual do Mundo",
  },
  {
    title: "Biosfera | Reciclagem de lixo evita poluição do solo",
    duration: "18 min",
    thumb: "https://i.ytimg.com/vi/N6c4xd2P0E4/maxresdefault.jpg",
    video_id: "N6c4xd2P0E4",
    canal: "BOA VONTADE",
  },
  {
    title: "BRINQUEDOS COM MATERIAIS RECICLÁVEIS",
    duration: "6 min",
    thumb: "https://i.ytimg.com/vi/qeNmZrRDfrw/maxresdefault.jpg",
    video_id: "qeNmZrRDfrw",
    canal: "GERANDO RAIZES",
  },
  {
    title: "COMPENSA TRABLHAR COM RECICLAGEM ??",
    duration: "8 min",
    thumb: "",
    video_id: "lg2A-KPNXYU",
    canal: "Rafael Alemão",
  },
  {
    title: "10 formas de poluir menos o planeta terra",
    duration: "6 min",
    thumb: "https://i.ytimg.com/vi/4bcBifYGLgk/maxresdefault.jpg",
    video_id: "4bcBifYGLgk",
    canal: "Manual do Mundo",
  },
  {
    title:
      "Meio Ambiente por Inteiro - A importância dos Agentes de Reciclagem",
    duration: "26 min",
    thumb: "https://www.saomiguel.pr.gov.br/wp-content/uploads/2018/10/20181017-TREINAMENTO-USINA-DE-RECICLAGEM-1.jpg",
    video_id: "w_fahGYv05U",
    canal: "Tv Justiça Oficial",
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
    cardClone.querySelector(".info > p.price").innerHTML = video.canal;
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
