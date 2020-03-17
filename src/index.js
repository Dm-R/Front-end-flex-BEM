import './scss/styles.scss';
import './scss/fragments/main-img.scss';
import './scss/fragments/page.scss';
import './scss/fragments/article.scss';
import './scss/fragments/slider.scss';
import './dynamic';
import 'babel-polyfill';

// Воспользуемся замыканием, чтобы всегда иметь доступ к номеру текущего слайда
// код вне функции не сможет ее переопределить
const changeSlide = (() => {
  let number = 1; // номер текущего слайда
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');

  // переменная indicator если true, то функция вызывается индикатором
  // можно было проверить и при помощи this
  return (n, indicator = false) => {
    const currentVal = number;
    const sum = number + n;

    // определяем номер следующего слайда
    // eslint-disable-next-line no-nested-ternary
    number = indicator ? n : sum > 3 ? 3 : sum < 1 ? 1 : sum;

    // если закончились слайды в одну из сторон ничего не выполнять
    if (number === currentVal) return;

    // слайд, который надо скрыть
    const slideToHidden = document.querySelector(`#slide${currentVal}`);

    // слайд, который надо показать
    const slideToShow = document.querySelector(`#slide${number}`);

    // индикатор, который надо показать
    const indicatorToShow = document.querySelector(`#indicator${number}`);

    // индикатор, который надо скрыть
    const indicatorToHidden = document.querySelector(`#indicator${currentVal}`);

    indicatorToShow.style.opacity = '1';
    indicatorToHidden.style.opacity = '.5';
    slideToHidden.classList.add('hiddenByAnimation');
    slideToHidden.classList.remove('shownByAnimation');
    slideToShow.classList.remove('hidden');
    slideToShow.classList.add('shownByAnimation');
    slideToShow.classList.remove('hiddenByAnimation');

    // следим за затенением стрелок слайдера
    next.style.color = (number === 3 ? 'rgb(130,130,130)' : 'rgb(212, 210, 210)');
    prev.style.color = (number === 1 ? 'rgb(130,130,130)' : 'rgb(212, 210, 210)');
  };
})();

// зададим начальные значения
document.querySelector('#indicator1').style.opacity = '1';
document.querySelector('#prev').style.color = 'rgb(130,130,130)';

// зададим обработчики для стрелок слайдера
document.querySelector('#prev').addEventListener('click', () => {
  changeSlide(-1);
});
document.querySelector('#next').addEventListener('click', () => {
  changeSlide(1);
});

// в цикле зададим обработчики для индикаторов
document.querySelectorAll('.indicator').forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    changeSlide((index + 1), true);
  });
});
