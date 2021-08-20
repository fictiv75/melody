$(document).ready(function () {
  var currentFloor = 2; // переменная, где храниться текущий этаж
  var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // Функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); // при клике на этаж, вызвать окно
  modalCloseButton.on("click", toggleModal); // при клике закрыть окно
  viewFlatsButton.on('click', toggleModal);

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибавляем одинэтаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текщий этаж
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() { // функция открыть-закрыть окно
    modal.toggleClass("is-open");
  }
});