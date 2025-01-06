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


//brandimg slider

var swiper = new Swiper(".brandimg .mySwiper1", {
  direction: "vertical",

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

//popup

// $(document).ready(function () {

//   // nav menu
//   $('nav > ul > li').mouseenter(function () {
//     $(`.sub-menu`).removeClass('active');

//     const targetId = $(this).attr('data-target');

//     $(`.sub-menu[data-id="${targetId}"]`).addClass('active');
//   })

//   // $('.sub-menu').mouseleave(function () {
//   //   $(this).removeClass('active');
//   // })


// });

//500px ~ 790px

$(document).ready(function () {
  const handleResponsiveMenu = () => {
    if ($(window).width() <= 790) {
      // Main menu hover
      $('nav > ul > li').off('mouseover').on('click', function () {
        const targetId = $(this).attr('data-target');

        // Show submenu and hide main menu text
        $('.main-menu').hide(); // Main menu 숨김
        $('.back-button').addClass('active');
        $('.sub-menu').removeClass('active'); // 모든 submenu 비활성화

        $(`.sub-menu[data-id="${targetId}"]`).addClass('active'); // 해당 submenu 활성화

        $('body').addClass('scroll-disabled'); //body scroll 비활성화
      });

      // Back button
      $('.back-button').off('mouseover').on('click', function () {
        $('.sub-menu').removeClass('active'); // 모든 submenu 비활성화
        $('.main-menu').show(); // Main menu 다시 표시
        $('.back-button').removeClass('active');

      });
      $('.sub-menu').removeClass('active'); // 리사이즈 시 모든 서브 메뉴 비활성화
      $('.main-menu').show(); // 메인 메뉴 다시 표시
      $('.back-button').removeClass('active');
    } else {
      // Restore default behavior for larger screens
      $('.sub-menu__group').addClass('active');
      $('.main-menu').show();

      $('nav > ul > li').off('click').on('mouseover', function () {
        const targetId = $(this).attr('data-target');
        $('.sub-menu').removeClass('active');
        $(`.sub-menu[data-id="${targetId}"]`).addClass('active');
      });

    }
  };

  // Initial setup
  handleResponsiveMenu();

  // Reapply logic on window resize
  $(window).on('resize', handleResponsiveMenu);
  // $('body').removeClass('scroll-disabled'); //body 활성화
});

//popup 닫기


$(document).ready(function () {
  $('.navbtn ').click(function () {
    $('.popup').show();
  })
  $('.closebtn').click(function () {
    $('.popup').hide();
  })
});


//Circle

$(document).ready(function () {
  $('.img-box').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.img-box').mouseleave(function () {
    $(this).removeClass('active')
  })
});

//header

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

//readmore-circle

$(document).ready(function () {
  $('.readmore').mouseenter(function () {
    $(this).addClass('active');
  })

  $('.readmore').mouseleave(function () {
    $(this).removeClass('active');
  })
});

//newsall

$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  });
});


//.loading

$(document).ready(function () {
  $('.container').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.container').mouseleave(function () {
    $(this).removeClass('active');
  })
});

//footer
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
  toggleSubmenu(); //초기실행
  $(window).resize(function () {
    toggleSubmenu();
  });


});