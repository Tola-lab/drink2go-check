const slider = document.querySelector('.hero__slider');
const slides = Array.from(slider.querySelectorAll('.slider__content-wrapper'));
const prevButtons = slider.querySelectorAll('.slider-button-prev');
const nextButtons = slider.querySelectorAll('.slider-button-next');
const paginationButtons = Array.from(slider.querySelectorAll('.slider-pagination__link'));

const slideCount = slides.length;
let slideIndex = 0;

const showPreviousSlide = () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
};

const showNextSlide = () => {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    updateSlider();
  }
};

const updatePagination = (index) => {
  if (index >= 0 && index < slideCount) {
    slideIndex = index;
    updateSlider();
  }
};

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('slider__content-wrapper--active', index === slideIndex);
  });

  prevButtons.forEach((button) => {
    if (slideIndex === 0) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  nextButtons.forEach((button) => {
    if (slideIndex === slideCount - 1) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  paginationButtons.forEach((button, index) => {
    button.classList.toggle('slider-pagination__link--active', index === slideIndex);
  });
}

prevButtons.forEach((button) => button.addEventListener('click', showPreviousSlide));
nextButtons.forEach((button) => button.addEventListener('click', showNextSlide));

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    updatePagination(index);
  });
});

export {updateSlider};
