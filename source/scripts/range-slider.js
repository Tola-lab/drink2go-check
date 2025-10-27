const slider = document.querySelector('#range-slider');
const inputMin = document.querySelector('#range-min');
const inputMax = document.querySelector('#range-max');
const form = document.querySelector('.catalog__filter');

const MIN = 0;
const MAX = 1000;
const DEFAULT_MIN = 0;
const DEFAULT_MAX = 900;

noUiSlider.create(slider, {
  start: [DEFAULT_MIN, DEFAULT_MAX],
  connect: true,
  range: { min: MIN, max: MAX },
  cssPrefix: 'noui-'

});

const changeRangeSlider = () => {

  slider.noUiSlider.on('update', (values) => {
    inputMin.value = Math.round(values[0]);
    inputMax.value = Math.round(values[1]);
  });

  inputMin.addEventListener('change', () => {
    slider.noUiSlider.set([+inputMin.value || MIN, null]);
  });

  inputMax.addEventListener('change', () => {
    slider.noUiSlider.set([null, +inputMax.value || MAX]);
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      slider.noUiSlider.set([DEFAULT_MIN, DEFAULT_MAX]);
    }, 0);
  });
};

export {changeRangeSlider};
