var swiper = new Swiper(".brandimg-text .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,

  pagination: {
    el: ".brandimg-text .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".brandimg-text .swiper-button-next",
    prevEl: ".brandimg-text .swiper-button-prev",
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});



var swiper = new Swiper(".brandimg .mySwiper1", {
  direction: "vertical",

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});






$(document).ready(function () {
  const handleResponsiveMenu = () => {
    if ($(window).width() <= 790) {

      $('nav > ul > li').off('mouseover').on('click', function () {
        const targetId = $(this).attr('data-target');

        $('.main-menu').hide();
        $('.back-button').addClass('active');
        $('.sub-menu').removeClass('active');

        $(`.sub-menu[data-id="${targetId}"]`).addClass('active');

        $('body').addClass('scroll-disabled');
      });


      $('.back-button , .closebtn').off('mouseover').on('click', function () {
        $('.sub-menu').removeClass('active');
        $('.main-menu').show();
        $('.back-button').removeClass('active');
        $('body').removeClass('scroll-disabled');
      });
      $('.sub-menu').removeClass('active');
      $('.main-menu').show();
      $('.back-button').removeClass('active');
    } else {

      $('.sub-menu__group').addClass('active');
      $('.main-menu').show();

      $('nav > ul > li').off('click').on('mouseover', function () {
        const targetId = $(this).attr('data-target');
        $('.sub-menu').removeClass('active');
        $(`.sub-menu[data-id="${targetId}"]`).addClass('active');

      });

    }
  };


  handleResponsiveMenu();


  $(window).on('resize', handleResponsiveMenu);
  $('body').removeClass('scroll-disabled');
});



$(document).ready(function () {
  $('.navbtn ').click(function () {
    $('.popup').show();
    $('body').addClass('scroll-disabled');
  })
  $('.closebtn').click(function () {
    $('.popup').hide();
    $('body').removeClass('scroll-disabled');

  })
});




$(document).ready(function () {
  $('.img-box').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.img-box').mouseleave(function () {
    $(this).removeClass('active')
  })
});



$(document).ready(function () {
  let lastScrollTop = 0;
  const header = $('.main');

  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }

    lastScrollTop = currentScroll;
  })
});



$(document).ready(function () {
  $('.readmore').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.readmore').mouseleave(function () {
    $(this).removeClass('active');
  })
});



$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  });
});



$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  })
});


$(document).ready(function () {
  function toggleSubmenu() {
    if ($(window).width() <= 750) {
      $(".category__mainmenu").off("click").on("click", function () {
        const target = $(this).attr("data-target");
        $(`.category__submenu[data-id = ${target}]`).stop().slideToggle();

        const iconDown = $(this).find(".category__icons-down");
        const iconUp = $(this).find(".category__icons-up");

        iconDown.toggle();
        iconUp.toggle();
      });

    } else {
      $(".category__submenu").slideDown();
      $(".category__mainmenu").off("click");
    }
  }
  toggleSubmenu();
  $(window).resize(function () {
    toggleSubmenu();
  });


});