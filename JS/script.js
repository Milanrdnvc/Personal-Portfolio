const gridItemWrapper = document.querySelectorAll('.projects__grid-item-wrapper');
const gridBtns = document.querySelectorAll('.projects__grid-item-wrapper .btn');

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
