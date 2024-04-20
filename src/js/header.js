function headerAnimatedColorChange() {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    const colorChangePosition = 20;
    if (scrollPosition >= colorChangePosition) {
      header.classList.add('headerfixed');
        }
    else header.classList.remove('headerfixed');
  });
}
headerAnimatedColorChange();
