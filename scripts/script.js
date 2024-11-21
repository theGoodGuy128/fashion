// let toggleBtn = document.querySelector("#menuToggle");
// menuToggle.onclick = function () {
//   console.log("Клик!");
//   //   TO DO Добавить переключение класса Active >1
// };

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");

  document
    .querySelector(".page-header__nav")
    .classList.toggle("page-header__nav--open");
});
