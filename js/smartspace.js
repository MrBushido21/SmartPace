const swiperFirst = new Swiper('.swiper', {
    // If we need pagination
    speed: 800,

  loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  watchOverflow: true, // если будет не достаточно слайдов он перестанет работать 

  spaceBetween: 10, // отступы между слайдами

  autoplay: {
    delay: 3000, // пауза между прокруткой
    stopOnLastSlide: true, // закончить на последнем слайде
    disableOnInteraction: true, //отключить после ручного переключания
  },
    
  
  });
  //================================================================================================================================================
  //-----------------TEXT---------------\
  const burger = document.querySelectorAll('.burger');
  const list = document.querySelector('.header__list');

  burger.forEach(el => {
    el.addEventListener("click", function(){
      list.classList.toggle('_active');
      document.body.classList.toggle('_lock');
    });
  });

  //================================================================================================================================================
  //-----------------TEXT---------------\
  const input1 = document.querySelector('.begin__input');
  const input1Placeholder = input1.placeholder;
  const input2 = document.querySelector('.newsletter__input');
  const input2Placeholder = input2.placeholder;

  input1.addEventListener('focus', function() {
  input1.placeholder = "";
  });
  input1.addEventListener('blur', function() {
    input1.placeholder = input1Placeholder;
    });

    input2.addEventListener('focus', function() {
     input2.placeholder = "";
      });

  input2.addEventListener('blur', function() {
    input2.placeholder = input2Placeholder;
  });
  
  //================================================================================================================================================
  //-----------------TEXT---------------\

  const link = document.querySelectorAll('.estate__link');
  const blockMain = document.querySelector('.estate__house, .main');
  const block = document.querySelectorAll('.estate__house');

  

  link[1].addEventListener('click', function(event) {
    block[1].classList.add('_visible');
    link[1].classList.add('_decoration');

    block[2].classList.remove('_visible');
    link[2].classList.remove('_decoration');
    block[3].classList.remove('_visible');
    link[3].classList.remove('_decoration');

    blockMain.classList.add('_hidden');
    link[0].classList.remove('_decoration');
    link[0].classList.add('_still');

    
    event.preventDefault()
  });

  link[2].addEventListener('click', function(event) {
    block[2].classList.add('_visible');
    link[2].classList.add('_decoration');

    blockMain.classList.add('_hidden');
    link[0].classList.remove('_decoration');
    link[0].classList.add('_still');
    block[1].classList.remove('_visible');
    link[1].classList.remove('_decoration');
    block[3].classList.remove('_visible');
    link[3].classList.remove('_decoration');
    
    event.preventDefault()
  });

  link[3].addEventListener('click', function(event) {
    block[3].classList.add('_visible');
    link[3].classList.add('_decoration');

    block[2].classList.remove('_visible');
    link[2].classList.remove('_decoration');
    block[1].classList.remove('_visible');
    link[1].classList.remove('_decoration');
    
    blockMain.classList.add('_hidden');
    link[0].classList.remove('_decoration');
    link[0].classList.add('_still');
    event.preventDefault()
  });

  link[0].addEventListener('click', function(event) {
    blockMain.classList.remove('_hidden');
    link[0].classList.add('_decoration');

    block[2].classList.remove('_visible');
    link[2].classList.remove('_decoration');
    block[1].classList.remove('_visible');
    link[1].classList.remove('_decoration');
    block[3].classList.remove('_visible');
    link[3].classList.remove('_decoration');
    link[0].classList.remove('_still');

    event.preventDefault()
  });

  //================================================================================================================================================
  //-----------------TEXT---------------\
  
  