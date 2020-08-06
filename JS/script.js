const gridItemWrapper = document.querySelectorAll('.projects__grid-item-wrapper');
const gridBtns = document.querySelectorAll('.projects__grid-item-wrapper .btn');
const header = document.querySelector('header');
const homeText = document.querySelectorAll('.home__text');
const firstPara = document.querySelector('.para');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

$('nav').localScroll();

burger.addEventListener('click', () => {
    nav.classList.toggle('translate-zero');
    nav.style.transition = 'all .5s ease';
});

gridItemWrapper.forEach((item, index) => {
    item.addEventListener('click', () => {
        switch(index){
            case 0:
                gridBtns[0].classList.toggle('grid-btn-toggle');
                gridBtns[1].classList.toggle('grid-btn-toggle');
                item.classList.toggle('grid-item-wrapper-toggle');
                break;
            
            case 1:
                gridBtns[2].classList.toggle('grid-btn-toggle');
                gridBtns[3].classList.toggle('grid-btn-toggle');
                item.classList.toggle('grid-item-wrapper-toggle');
                break;

            case 2:
                gridBtns[4].classList.toggle('grid-btn-toggle');
                gridBtns[5].classList.toggle('grid-btn-toggle');
                item.classList.toggle('grid-item-wrapper-toggle');
                break;
        }
    });
});


const events = ['scroll', 'load', 'resize'];
header.style.transition = 'background-color 0.3s ease';
nav.style.transition = 'background-color 0.3s ease';
for(let event of events){
    window.addEventListener(event, () => {
        if(this.scrollY > 50){
            header.style.backgroundColor = 'rgba(0, 0, 0, .5)';
            if(window.innerWidth < 900){
                nav.style.backgroundColor = 'rgba(0, 0, 0, .5)';
               
            } else{
                nav.style.backgroundColor = 'transparent';
            }
        } else{
            header.style.backgroundColor = 'transparent';
            nav.style.backgroundColor = 'transparent';
        }
    });
}


const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from(homeText[0], {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from(homeText[1], {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from('.home__button', {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from('.home__social', {y: '250%', opacity: 0, ease: 'power4'}, 0);

gsap.registerPlugin(ScrollTrigger);
gsap.from(firstPara,{scrollTrigger:{trigger: firstPara, start: 'top 70%', end: 'top 10%'}, y: '30%', opacity: 0, ease: 'power4', duration: 1});
gsap.from('.services__skill', {scrollTrigger: {trigger: '.services__skill', start: 'top 90%', end: 'top 10%'}, y: '30%', opacity: 0, ease: 'power4', duration: 1, stagger: .05});


