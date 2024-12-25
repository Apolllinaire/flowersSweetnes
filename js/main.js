const swiper = new Swiper(".mySwiper", {
    loop:true
});
const accardionBtn = document.querySelectorAll('.accardion__btn');
    const accardeonContent = document.querySelectorAll('.accardeon__content');
    const accardeonWrapper = document.querySelectorAll('.accardeon__wrapper');

    function remove() {
        accardionBtn.forEach(item => {
            item.classList.remove('accardion__btn--active');
        })
        accardeonContent.forEach(item => {
            item.classList.remove('accardeon__content--visible');
        })
    }

    accardeonWrapper.forEach((item, j) => {
        item.addEventListener('click', (e) => {
            accardionBtn[j].classList.toggle('accardion__btn--active');
            if (accardionBtn[j].classList.contains('accardion__btn--active')) {
                accardeonContent[j].classList.add('accardeon__content--visible', 'fade')
            }
            else {
                accardeonContent[j].classList.remove('accardeon__content--visible')
            }

        });
    });
    remove();
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modalInputPhone = document.querySelector('[data-input-phone]'),
    modalInputText = document.querySelector('[data-input-text]'),
    modalInputs = document.querySelectorAll('.modal__input');


const modalTimerId = setTimeout(openModal, 3000);

function openModal() {
    modal.classList.add('transform-show');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
}
modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.remove('transform-show');
    document.body.style.overflow = '';

}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();

    }
});
    

    modalCloseBtn.addEventListener('click', closeModal);

    const modalForm = document.querySelector('.modal__form');

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        modalInputs.forEach(input => {
            input.value = ''
        });
        closeModal();

    });