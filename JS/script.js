const gridItemWrapper = document.querySelectorAll('.projects__grid-item-wrapper');
const gridBtns = document.querySelectorAll('.projects__grid-item-wrapper .btn');
const header = document.querySelector('header');
const homeText = document.querySelectorAll('.home__text');
const firstPara = document.querySelector('.para');

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
        }
    });
});

const events = ['scroll', 'load'];
for(let event of events){
    window.addEventListener(event, () => {
        this.scrollY > 50? header.style.backgroundColor = 'rgba(0, 0, 0, .5)' : header.style.backgroundColor = 'transparent';
        header.style.transition = 'all 0.3s ease'
    });
}

const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from(homeText[0], {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from(homeText[1], {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from('.home__button', {y: '250%', opacity: 0, ease: 'power4'}, 0)
    .from('.home__social', {y: '250%', opacity: 0, ease: 'power4'}, 0);

gsap.registerPlugin(ScrollTrigger);
gsap.from(firstPara, {scrollTrigger: {trigger: firstPara, toggleActions: 'restart reverse restart reverse', start: 'top 70%', end: 'top 10%'}, y: '30%', opacity: 0, ease: 'power4', duration: 1});
gsap.from('.services__skill', {scrollTrigger: {trigger: '.services__skill', toggleActions: 'restart reverse restart reverse', start: 'top 80%', end: 'top 10%'}, y: '30%', opacity: 0, ease: 'power4', duration: 1, stagger: .05});

// gsap.from(para[0], {scrollTrigger: {trigger: para[0], toggleActions: 'restart none none none'}, y: '150%', opacity: 0, ease: 'power4', duration: 1});
// gsap.from(para[1], {scrollTrigger: {trigger: para[1], toggleActions: 'restart none none none'}, y: '150%', opacity: 0, ease: 'power4', duration: 1, delay: 1});
// gsap.from(para[2], {scrollTrigger: {trigger: para[2], toggleActions: 'restart none none none'}, y: '150%', opacity: 0, ease: 'power4', duration: 1, delay: 2});
// gsap.from(para[3], {scrollTrigger: {trigger: para[3], toggleActions: 'restart none none none'}, y: '150%', opacity: 0, ease: 'power4', duration: 1, delay: 3});


