import "./index.css";
import Carousel from "../components/Carousel.js";

const stagesCarouselData = {
  elemVisible: 1, // Кол-во отображаемых элементов в карусели
  loop: false, // Бесконечное зацикливание карусели
  auto: false, // Автоматическая прокрутка
  interval: 4000, // Интервал между прокруткой элементов (мс)
  speed: 750, // Скорость анимации (мс)
  touch: true, // Прокрутка  прикосновением
  arrows: true, // Прокрутка стрелками
  dots: true,
};

const cardsCarouselData = {
  elemVisible: 3, // Кол-во отображаемых элементов в карусели
  loop: true, // Бесконечное зацикливание карусели
  auto: true, // Автоматическая прокрутка
  interval: 4000, // Интервал между прокруткой элементов (мс)
  speed: 750, // Скорость анимации (мс)
  touch: true, // Прокрутка  прикосновением
  arrows: true, // Прокрутка стрелками
  dots: false,
};

new Carousel("stages-carousel", stagesCarouselData);

new Carousel("cards-carousel", cardsCarouselData);
